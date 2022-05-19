// Global middlewares are those that will be running during every HTTP request
// Every HTTP request arrived in server, will trigger the middlewares which is called global middleware
// Defining a global middleware by using app.use(middleware function)

const express = require('express')
const app = express()

// put middleware at first position where is before all of routes
const mw = function (req, res, next) {
  console.log('This is middleware')
  next()
  // next at end of function
}

// register mw as a global middleware
app.use(mw)

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
