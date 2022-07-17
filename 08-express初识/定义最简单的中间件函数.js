const express = require('express')

const app = express()

// 定义一个简单的中间件函数
const mw = function(req, res, next) {
  const time = Date.now()
  req.startTime = time
  console.log("这是一个简单的中间件函数")
  // 把流转关系，转交给下一个中间件或路由
  next()
}

// 将 mw 注册为全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
  res.send('Home page.' + req.startTime)
})

app.get('/user', (req, res) => {
  res.send('User page')
})

app.listen(8080, () => {
  console.log("express running at http://127.0.0.1:8080")
})