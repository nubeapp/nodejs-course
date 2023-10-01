const express = require('express')
const ditto = require('./pokemon/ditto.json')
const PORT = process.env.PORT || 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// Esta implementación corresponde con app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  req.body.timestamp = Date.now()
  res.json(req.body)
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found'
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
