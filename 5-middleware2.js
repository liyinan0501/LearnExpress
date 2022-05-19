const express = require('express')
const app = express()

// defining the simplest middleware function
const mw = function (req, res, next) {
  console.log('This is the simplest middleware function')
  // handle over the assignment to next middleware or route
  next()
}

app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
