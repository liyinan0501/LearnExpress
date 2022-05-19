// middleware
// middleware preprocesses the requests from client browser.
// middleware in Express is just a function.

// Differece between middleware and route handler function:
// middleware function example:
app.get('/', function (req, res, next) {
  next() // handle over the assigment to next middleware for handling
})

// route handler function example:
app.get('/', function (req, res) {})
