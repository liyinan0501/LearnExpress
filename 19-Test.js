const express = require('express')
const app = express()

const router = require('./19-apiRouter')
app.use('/api', router)
app.use(express.urlencoded({ extended: false }))

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})

// http://127.0.0.1/api/get?name=zs&age=20
