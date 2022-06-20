const path = require('path')
const fs = require('fs')

const pathStr = path.join('/a', '/b/c', '../', './d', '/e')
console.log(pathStr)  // \a\b\d\e ../会抵消一层路径

//路径拼接换"path.join"为"+"
const pathStr1 = path.join(__dirname, '/file/a.js')
console.log(pathStr1)

fs.readFile(path.join(__dirname, '../01-fs的使用/files/1.txt'), 'utf-8', (err, dataStr) => {
  if(err){
    return console.log(err.message)
  }else {
    console.log(dataStr)
  }
})

const url = '/a/b/c/d/inde.html'
const basename = url.basename()