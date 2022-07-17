const express = require('express')

const app = express()

const mw1 = (req, res, next) => {
  console.log("调用了局部生效的中间件1")
  next()
}

const mw2 = (req, res, next) => {
  console.log("调用了局部生效的中间件2")
  next()
}

// 等价于 app.get('/', [mw1, mw2], (req, res) => {})
app.get('/', mw1, mw2, (req, res) => {
  res.send("Home page")
})

app.get('/user', (req, res) => {
  res.send("User page")
})

app.listen(8080, () => {
  console.log("express running at http://127.0.0.1:8080")
})