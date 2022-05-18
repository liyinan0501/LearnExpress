const express = require('express')
const app = express()

// 1. import router module
const router = require('./3-router')
// 2. implement router module and add a visit prefix
app.use('/api', router)

// app.use() 注册全局中间件

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
