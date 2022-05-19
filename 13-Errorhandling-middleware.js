const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // mean to make a error
  throw new Error(`There is a problem in the server`)
  res.send(`Home Page`)
})

// defining an Error handling middleware, which can prevent a crash in server
// defining an Error handling middleware before all of routes4
app.use((err, req, res, next) => {
  console.log('Erro: ' + err.message)
  res.send('Error: ' + err.message)
})

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
