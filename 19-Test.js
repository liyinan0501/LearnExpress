const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// JSONP 接口
// 在 cors 之前，优先创建配置 JSONP 接口，这个接口不会被处理成 cors 接口。
// 1. JSONP 只支持 GET 请求。
// 2. 无XMLHttpRequest对象，不属于Ajax请求。
app.get('/api/jsonp', (req, res) => {
  // TODO: 定义JSONP 接口具体实现步骤：
  // 1. 获取客户端发送过来的回调函数的名字
  const funcName = req.query.callback
  // 2. 得到要通过JSONP形式发送给客户端的数据
  const data = { name: 'JSONP DATA' }
  // 3. 拼接一个函数调用的字符串，需要用 JSON.stringify 把 data 对象转成 JSON 格式的字符串。
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 相应给客户端的 <script> 标签进行解析执行
  res.send(scriptStr)
})

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题。
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./19-apiRouter')
// 把路由模块，注册到app上。
app.use('/api', router)

app.listen(80, () => {
  console.log(`Server running at http://127.0.0.1`)
})

// http://127.0.0.1/api/get?name=zs&age=20
/*
  *CORS
  *Access-Control-Allow-Origin: <origin> 或 *
  origin: 参数的值指定了允许访问该资源的外域url
  只允许来自 http://itcast.cn 的请求:
  res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')
  允许来自任何域的请求:
  res.setHeader('Access-Control-Allow-Origin', '*')

  默认情况下，cors仅支持客户端向服务器发送如下的9个请求头，
  Accept, Accept-Language, Content-Language, DPR, Downlink, Save-Data, Viewport-Width, Width,
  Content-Type(仅限于text/plain, multipart/form-data, application/x-www-form-urlencoded 三者之一)
  如果超出这9种请求头，服务端无法相应，需要配置如果下：
  *Access-Control-Allow-Header
  res.setHeader('Access-Control-Allow-Header', 'Content-Type, X-Custom-Header')

  默认情况下， cors仅支持客户端发起的GET, POST, HEAD请求。
  如果客户端希望通过PUT, DELETE等方式请求服务器的资源，则需要再服务器配置如下：
  *Access-Control-Allow-Methods
  只允许POST, GET, DELETE, HEAD 请求：
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
  允许所有HTTP请求方法：
  res.setHeader('Access-Control-Allow-Methods', '*')
*/
