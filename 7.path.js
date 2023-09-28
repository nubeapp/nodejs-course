const path = require('node:path')

console.log(path.sep)
// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const filename = path.basename(filePath)
console.log(filename)

const filenameWithoutExt = path.basename(filePath, '.txt')
console.log(filenameWithoutExt)

const extention = path.extname(filename)
console.log(extention)
