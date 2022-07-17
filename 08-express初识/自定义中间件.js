const express = require('express')
const qs = require('querystring')

const app = express()

// // 这是解析表单数据的中间价
// app.use((req, res, next) => {
//   // 定义中间件具体的业务逻辑
//   // 1.定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
//   let str = ''
//   // 2.监听 req 的 data 事件
//   req.on('data', (chunk) => {
//     str += chunk
//   })
//   // 3.监听 req 的end 事件
//   req.on('end', () => {
//     const body = qs.parse(str)
//     req.body = body
//     // console.log(body)
//     next()
//   })
// })

// 导入自己封装的中间件模块
const customBodyParse = require('./custom-body-parser')
// 将自定义的中间件函数，这侧为全局可用的中间件
app.use(customBodyParse)

app.post('/user', (req, res) => {
  console.log("1111",req.body)
  res.send('ok')
})

app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1:8080")
})