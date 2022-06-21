const express = require('express')
const router = express.Router()

// mounting routes
router.get('/get', (req, res) => {
  // 通过req.query 获取客户端通过查询字符串，发送到服务器的数据。
  const query = req.query
  // 调用res.send()方法，向客户端响应处理结果。
  res.send({
    status: 0, // 0 is succeed, 1 is fails
    meg: 'GET request succeeds!',
    data: query,
  })
})

router.post('/post', (req, res) => {
  // 通过req.body 获取客户端请求体中包含的url-encoded格式的数据。
  const body = req.body
  // 调用res.send()方法，向客户端响应处理结果。
  res.send({
    status: 0,
    msg: 'POST request succeeds!',
    data: body,
  })
})

router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE request succeeds!',
  })
})

module.exports = router
