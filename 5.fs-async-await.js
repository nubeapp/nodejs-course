const { readFile } = require('node:fs/promises');

(async () => {
  console.log('Leyendo primer archivo...')
  const firstText = await readFile('archivo.txt', 'utf-8')
  console.log(firstText)
  console.log('Hacer cosas mientras se lee el archivo...')

  console.log('Leyendo segundo archivo...')
  const secondText = await readFile('archivo2.txt', 'utf-8')
  console.log(secondText)
})()
