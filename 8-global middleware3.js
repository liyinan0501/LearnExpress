const express = require('express')
const app = express()

app.use((req, res, next) => {
  // get the time of request arrived in server
  const time = Date.now()
  // put the attribute on req object
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  // const time = Date.now() // without using middleware
  res.send('Home Page' + req.startTime)
})

app.get('/user', (req, res) => {
  // const time = Date.now() // without using middleware
  res.send('User Page' + req.startTime)
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
