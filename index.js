const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.json())

app.post('/book', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
