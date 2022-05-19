// difining multiple global middlewares
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`This is 1st mmiddleware`)
  next()
})
app.use((req, res, next) => {
  console.log(`This is 2nd mmiddleware`)
  next()
})
app.use((req, res, next) => {
  console.log(`This is 3rd mmiddleware`)
  next()
})

app.get('/', (req, res) => {
  console.log(`reached route`)
  res.send('Home Page')
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
