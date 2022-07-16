// 1.导入 express
const express = require('express')
// 2.创建 web 服务器
const app = express()

// 在这里，调用 express.static() 方法， 快速的对外提供静态资源
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

// 导入路由模块
const router = require('./router')
// 注册路由模块
app.use('/api',router)

// 4.监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的res.send() 方法，向客户端响应一个JSON 对象
  res.send({number: Math.random()})
})
app.post('/user', (req, res) => {
  res.send('请求成功')
})
app.get('/', (req, res) => {
  // req.query 可以获取到客户端发送过来的查询参数
  // 默认情况下 req.query 为一个{}
  console.log(req.query)
  res.send(req.query) // { name: 'zs', age: '18', id: '1' }
})
app.get('/user/:id/:username', (req, res) => {
  // req.params 可以动态匹配到 URL 参数，默认也是一个空对象
  // 默认情况下 req.params 为一个{}
  console.log(req.params)
  res.send(req.params, '11111') // { id: '1', username: 'zs' }
})

// 3.调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
})