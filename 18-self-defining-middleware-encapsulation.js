const qs = require('querystring')

const bodyParser = (req, res, next) => {
  let str = ''

  req.on('data', (trunk) => {
    str += trunk
  })

  req.on('end', () => {
    console.log(str)
    const body = qs.parse(str)
    console.log(body)
    req.body = body
    next()
  })
}

module.exports = bodyParser
