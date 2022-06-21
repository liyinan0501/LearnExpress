// 1. import express
const express = require('express')
// 2. create web server
const app = express()

// 3. listen the GET request from client
// get(url, callback function(request object, response object))
app.get('/user', (req, res) => {
  // send the content(JSON object) to client
  res.send({ name: 'Tom', age: 30, gender: 'male' })
})

// 4. listen the POST request from client
// post(url, callback function(request object, response object))
app.post('/user', (req, res) => {
  res.send(`POST request succeeds!!`)
})

app.get('/', (req, res) => {
  // via req.query can get the query parameter from client GET request
  // default req.query is empty object
  console.log(req.query)
  res.send(req.query) // { name: 'jack', age: '20' }
  // http://127.0.0.1/?name=jack&age=20
})

// :id is dynamic parameter (id can be changed)
app.get('/user/:id/:name', (req, res) => {
  // via req.params can get the dynamic parameter from client GET request
  // default req.params is empty object
  console.log(req.params) //{ id: '1', name: 'rose' }
  res.send(req.params) // { "id": "1", "name": "rose" }
  // http://127.0.0.1/user/1/rose
})

// 5. turn on the web server
app.listen(80, () => {
  console.log(`Express Server running at http://127.0.0.1`)
})
