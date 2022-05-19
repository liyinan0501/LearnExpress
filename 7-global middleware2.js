// Global middlewares - easy mode

const express = require('express')
const app = express()

// register mw as a global middleware using an easy way
app.use((req, res, next) => {
  console.log('This is middleware')
  next()
})

app.get('/', (req, res) => {
  console.log(`calling ' / ' route`)
  res.send('Home Page')
})

app.get('/user', (req, res) => {
  console.log(`calling ' /user ' route`)
  res.send('User Page')
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
