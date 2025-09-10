import fs from 'fs'

// Configuration
const OUT_SW_FILE = 'out/sw.js'

function updateServiceWorkerPaths() {
  const prefix = process.env.PREFIX || ''

  console.log(`Updating service worker PREFIX variable with: "${prefix}"`)

  try {
    // Read the existing service worker file from out directory
    const swContent = fs.readFileSync(OUT_SW_FILE, 'utf8')

    // Replace only the PREFIX variable declaration
    const updatedContent = swContent.replace(/const PREFIX = '.*'/, `const PREFIX = '${prefix}'`)

    // Write the updated content back to the same file
    fs.writeFileSync(OUT_SW_FILE, updatedContent)

    console.log(`Service worker PREFIX updated in: ${OUT_SW_FILE}`)
  } catch (error) {
    console.error('Error updating service worker PREFIX:', error)
    process.exit(1)
  }
}

updateServiceWorkerPaths()
