const http = require('http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Bienvenido a mi página web')
  } else if (req.url === '/imagen') {
    fs.readFile('./foto.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Error interno</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png; charset=utf-8')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Puedes contactarme a mi correo:')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('No se encontró la página')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server running on port http://localhost:${desiredPort}`)
})
