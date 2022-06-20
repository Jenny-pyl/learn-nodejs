const fs = require('fs')
//读文件
fs.readFile('./files/1.txt','utf-8',(err, dataStr) => {
  if(err) {
    console.log("读取文件错误!",err.message)
  }else {
    console.log("读取文件成功!",dataStr)
  }
})

//写文件
fs.writeFile('./files/2.txt', 'Hello, nodejs',(err) => {
  if(err) {
    console.log('写入文件失败',err.message)
  }else {
    console.log('写入文件成功')
  } 
})