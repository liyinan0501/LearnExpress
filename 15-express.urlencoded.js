const express = require('express')
const app = express()

app.use(express.json()) // after config middleware, req.body there is content
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // at default, if there is no middleware for json post, req.body is undefined
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
