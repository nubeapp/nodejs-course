const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (dir) {
  let files
  try {
    files = await fs.readdir(dir)
  } catch (error) {
    console.error(pc.red(`Error al leer el directorio ${dir}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    let stats
    const filePath = path.join(dir, file)
    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.log(`Error al leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'DIR' : 'FILE'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.white(fileType.padEnd(5))} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.toString().padEnd(8))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
