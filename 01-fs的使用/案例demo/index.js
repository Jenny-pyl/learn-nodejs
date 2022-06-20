const fs = require('fs')
fs.readFile('../files/score.txt','utf-8', (err, dataStr) => {
  if(err) {
    return console.log("读取文件失败", err.message)
  }
  const arr1 = dataStr.split(' ')
  const arr2 = []
  arr1.forEach(item => {
    arr2.push(item.replace('=',':'))
  })
  const str = arr2.join('\r\n')
  fs.writeFile('../files/score-change.txt', str, (err) => {
    if(err){
      return console.log("写入文件失败", err.message)
    }
    console.log("写入文件成功")
  })
})