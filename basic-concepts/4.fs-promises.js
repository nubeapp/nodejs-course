const fs = require('node:fs/promises')

console.log('Leyendo primer archivo...')
fs.readFile('archivo.txt', 'utf-8').then((data) => {
  console.log(data)
})
console.log('Hacer cosas mientras se lee el archivo...')

console.log('Leyendo segundo archivo...')
fs.readFile('archivo2.txt', 'utf-8').then((data) => {
  console.log(data)
})
