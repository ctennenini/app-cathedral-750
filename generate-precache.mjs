import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

// Configuration
const OUT_DIR = 'out'
const MANIFEST_FILE = 'precache-manifest.js'

// files the kiosk doesn't need offline
const EXCLUDE = [/^\/SAMPLES\//, /^\/[a-z]{2}\/SAMPLES\//, /^\/components\//, /\.map$/]

// the build fails if everything except videos adds up to more than this (videos are reported separately)
const MAX_PRECACHE_MB = 60

// files in _next/static have a content hash in their name already; everything else gets one here,
// so the kiosk downloads a file again exactly when it has changed
function getRevision(filePath) {
  if (filePath.startsWith('/_next/static/')) {
    return null
  }
  const content = fs.readFileSync(path.join(OUT_DIR, filePath))
  return crypto.createHash('md5').update(content).digest('hex')
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath)

    files.forEach(function (file) {
      const fullPath = path.join(dirPath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
      } else {
        // Store path relative to OUT_DIR, starting with a '/'
        arrayOfFiles.push(path.join('/', path.relative(OUT_DIR, fullPath)))
      }
    })
  } catch (error) {
    if (error.code === 'ENOENT') {
      // out directory doesn't exist, which is fine, we'll just generate an empty manifest
      console.warn(`Warning: Directory ${dirPath} not found. Will generate an empty precache manifest.`)
    } else {
      // Other errors should be thrown
      throw error
    }
  }
  return arrayOfFiles
}

async function generatePrecacheManifest() {
  console.log(`Generating ${MANIFEST_FILE} from contents of ${OUT_DIR}...`)

  const allFilePaths = getAllFiles(OUT_DIR).filter(
    (filePath) => filePath !== `/${MANIFEST_FILE}` && !EXCLUDE.some((pattern) => pattern.test(filePath)),
  )

  const manifestEntries = []
  let totalBytes = 0
  let videoBytes = 0
  for (const filePath of allFilePaths) {
    const url = encodeURI(filePath)
    const revision = getRevision(filePath)
    manifestEntries.push(`  { url: '${url}', revision: ${revision ? `'${revision}'` : 'null'} }`)

    const size = fs.statSync(path.join(OUT_DIR, filePath)).size
    if (filePath.endsWith('.mp4')) {
      videoBytes += size
    } else {
      totalBytes += size
    }
  }

  const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(1)
  console.log(`Precache size: ${toMB(totalBytes)} MB, plus ${toMB(videoBytes)} MB of videos`)
  if (totalBytes > MAX_PRECACHE_MB * 1024 * 1024) {
    console.error(
      `Error: the offline cache would be ${toMB(totalBytes)} MB, more than the ${MAX_PRECACHE_MB} MB limit. ` +
        'Make images smaller (max. 1920 px wide, WebP or JPEG) before building.',
    )
    process.exit(1)
  }

  const manifestContent = `self.precacheManifest = [\n${manifestEntries.join(',\n')}\n];\n`

  try {
    const manifestPath = path.join(OUT_DIR, MANIFEST_FILE)
    // Ensure the 'public' directory exists
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true })
    fs.writeFileSync(manifestPath, manifestContent)

    if (allFilePaths.length === 0 && fs.existsSync(OUT_DIR)) {
      console.warn(
        `Warning: No files found in ${OUT_DIR}. ${MANIFEST_FILE} contains an empty array (but the directory exists).`,
      )
    }
    console.log(`${MANIFEST_FILE} generated with ${allFilePaths.length} entries.`)
    console.log(`Make sure to run this script after each build that updates the '${OUT_DIR}' directory.`)
  } catch (error) {
    console.error(`Error generating ${MANIFEST_FILE}:`, error)
    process.exit(1)
  }
}

await generatePrecacheManifest()
