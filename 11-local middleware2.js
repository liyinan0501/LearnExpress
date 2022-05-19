// defining muliple local middlewares
const express = require('express')
const app = express()

const mw1 = (req, res, next) => {
  console.log(`This is the 1st middleware`)
  next()
}

const mw2 = (req, res, next) => {
  console.log(`This is the 2nd middleware`)
  next()
}

// app.get('/', mw1, mw2, (req, res) => {
app.get('/', [mw1, mw2], (req, res) => {
  res.send(`Home Page`)
})

app.get('/user', (req, res) => {
  res.send(`User Page`)
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
