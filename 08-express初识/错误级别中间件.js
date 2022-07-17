const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // 人为制造一个错误对象
  throw new Error('服务器内部异常')

  res.send("Home page")
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
  console.log('发生了错误，' + err.message)
  res.send('Error:' + err.message)
})


app.listen(8080, () => {
  console.log("express running at http://127.0.0.1:8080")
})