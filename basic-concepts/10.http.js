const http = require('node:http')
const { findAvailablePort } = require('./11.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Petición recibida')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en puerto http://localhost:${port}`)
  })
})
