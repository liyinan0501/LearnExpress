// Application-level middleware:
// via app.use() app.get() app.post()
// the middleware binds on app instance

// Router-level middleware
// bind on express.Router()

// Error-handling middleware
const mw = function (err, req, res, next) {}
// Built-in middleware
// Third-party middleware
