const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/get', (req, res) => {
  const query = req.query
  res.send({
    status: 0, // 0表示成功， 1表示失败
    msg: 'GET请求成功', // 状态描述
    data: query // 需要响应给客户端的数据
  })
})

apiRouter.post('/post', (req, res) => {
  const body = req.body
  res.send({
    status: 0, // 0表示成功， 1表示失败
    msg: 'POST请求成功', // 状态描述
    data: body // 需要响应给客户端的数据
  })
})

apiRouter.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功'
  })
})

module.exports = apiRouter