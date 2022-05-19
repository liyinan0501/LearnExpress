const express = require('express')
const app = express()

const mw = (req, res, next) => {
  console.log('This is local middleware')
  next()
}

app.get('/', mw, (req, res) => {
  // middleware is working at this route
  res.send('Home Page')
})

app.get('/user', (req, res) => {
  // middleware is NOT working at this route
  res.send('User Page')
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
