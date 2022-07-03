const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

function resolveCSS(htmlStr) {
  //使用正则提取style
  const res = regStyle.exec(htmlStr)

  const newCSS = res[0].replace('<style>', '').replace('</style>', '')
  // console.log("newCss",newCSS)
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
    if(err) {
      return console.log("写入CSS文件失败！" + err.message)
    }
    console.log("写入CSS文件成功")
  })
}

function resolveJS(htmlStr) {
  const res = regScript.exec(htmlStr)
  const newScript = res[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newScript, err => {
    if(err) {
      console.log("写入JS文件失败！" + err.message)
    }
    console.log("写入JS文件成功")
  })
}

function resolveHTML(htmlStr) {
  //将字符串调用replace方法，把内敛的style和script标签，替换为外联的link和script
  const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
                    .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, err => {
    if(err) {
      return console.log("写入html文件失败" + err.message)
    }
    console.log("写入html文件成功")
  })
}

fs.readFile(path.join(__dirname, './资料/index.html'), 'utf-8', (err, dataStr) => {
  if(err) {
    return console.log("读取HTML文件失败！" + err.message)
  }

  //读取成功后调用三个方法，分别拆解出对应html，css，js写入clock文件夹
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
  
})
