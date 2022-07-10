const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method
  const str = `请求：your request url is ${url}, and request method is ${method}`
  console.log(str)
  //设置响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  //调用res.end(),向客户端响应一些内容
  res.end(str)
})

server.listen(8080, () => {
  console.log("server running at 127.0.0.1:8080")
})