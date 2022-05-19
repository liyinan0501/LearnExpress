// built-in middlewares
// express.static
// express.json 解析json格式的请求数据
// express.urlencoded 解析URL-encoded格式的请求数据

// express.json:

const express = require('express')
const app = express()

app.use(express.json()) // after config middleware, req.body there is content

app.post('/user', (req, res) => {
  // at default, if there is no middleware for json post, req.body is undefined
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
