const qs = require('querystring')

const bodyParse = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1.定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2.监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3.监听 req 的end 事件
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body
    // console.log(body)
    next()
  })
}

module.exports = bodyParse