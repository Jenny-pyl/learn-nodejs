const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.callback
  const data = { name: 'zs', age: 12}
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  res.send(scriptStr)
})

const cors = require('cors')
app.use(cors())

const router = require('./apiRouter')

app.use('/api', router)

app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1:8080")
})