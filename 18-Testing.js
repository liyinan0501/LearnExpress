const express = require('express')
const app = express()
const selfDefineParser = require('./18-self-defining-middleware-encapsulation')

app.use(selfDefineParser)

app.post('/book', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
