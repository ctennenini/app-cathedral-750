import fs from 'fs'
import path from 'path'

// Configuration
const OUT_DIR = 'out'
const MANIFEST_FILE = 'precache-manifest.js'

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

function generatePrecacheManifest() {
  console.log(`Generating ${MANIFEST_FILE} from contents of ${OUT_DIR}...`)

  const allFilePaths = getAllFiles(OUT_DIR)

  const manifestEntries = allFilePaths.map(
    (filePath) =>
      // Replace backslashes with forward slashes for URL consistency, especially on Windows
      `  { url: '${filePath.replace(/\\/g, '/')}', revision: null }`,
  )

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

generatePrecacheManifest()
