const express = require('express')
const app = express()
const qs = require('querystring')

//defining a self-defining middleware for ulrencoded
app.use((req, res, next) => {
  let str = ''
  // 当客户端发送数据会自动触发req事件里的data，我们需要监听，从而获得数据。
  req.on('data', (trunk) => {
    // += if there is a huge amount of data, the browser will send it piece by piece
    str += trunk
  })
  // 当请求体数据接收完毕后，会触发req的end事件，提示我们数据已经发送完。
  req.on('end', () => {
    // now str saving completed data
    console.log(str)
    const body = qs.parse(str)
    console.log(body)
    // 挂载到req.body 供下游使用
    req.body = body
    next()
  })
})

app.post('/book', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})
