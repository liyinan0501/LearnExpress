const express = require('express')
const app = express()

// express.static(folder name) - Serving static files
//app.use(express.static('./clock'))

// Serving multiple static folders
app.use(express.static('./files'))
//http://127.0.0.1/

// if both folders have index.html, the first one will be fund and send to client

// add visit prefix
app.use('/public', express.static('./clock'))
//http://127.0.0.1/public/index.html

app.listen(80, () => {
  console.log(`Express Server running at http://127.0.0.1`)
})
