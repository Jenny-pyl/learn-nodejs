const fs = require('fs')

//未在“01-fs的使用”文件夹下打开会出现路径问题
// fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
//   if(err) {
//     return console.log("文件打开失败", err.message)
//   }
//   console.log("文件打开成功", dataStr)
// })

//移植性差，不利于维护
// fs.readFile('D:\\study\\springbootvue\\learn-node\\01-fs的使用\\files\\1.txt', 'utf-8', (err, dataStr) => {
//   if (err) {
//     return console.log("文件打开失败", err.message)
//   }
//   console.log("文件打开成功", dataStr)
// })

//__dirname表示当前文件所处的目录
fs.readFile(__dirname + '/files/1.txt', 'utf-8', (err, dataStr) => {
  if (err) {
    return console.log("文件打开失败", err.message)
  }
  console.log("文件打开成功", dataStr)
})
