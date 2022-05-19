//Third-party middleware
const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.urlencoded({ extended: false }))
//app.use(express.urlencoded({ extended: false }))

app.use(parser.json())

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
