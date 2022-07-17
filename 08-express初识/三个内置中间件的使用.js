const express = require('express')

const app = express()

// 配置解析 application/json 格式数据的内置中间件
app.use(express.json())
// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({ extended: false}))

app.post('/user', (req, res) => {
  console.log(req.body) // 若不配置 express.json() 中间件，则为 undefined
  res.send("ok")
})

app.post('/book', (req, res) => {
  console.log(req.body) // 若不配置 express.urlencoded() 中间件，则为 {}
  res.send('Ok')
})

app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1:8080")
})