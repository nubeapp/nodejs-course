const fs = require('node:fs')

console.log('Leyendo primer archivo...')
fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error al leer el archivo')
    return
  }
  console.log(data)
})
console.log('Hacer cosas mientras se lee el archivo...')

console.log('Leyendo segundo archivo...')
fs.readFile('archivo2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error al leer el archivo')
    return
  }
  console.log(data)
})
