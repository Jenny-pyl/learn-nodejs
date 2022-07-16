## 安装
```
npm install Jenny-tools
```


## 导入
```js
const tools = require('Jenny-tools')
```


## 格式化时间
```js
// 调用 dataFormate 对时间进行格式化
const date = tools.dataFormate(new Date())
// 结果 2022-07-16 13:20:03
console.log(date)
```


## 转义 HTML 的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="name">这是h1标签</h1>'
// 调用 htmlEscape 方法进行转换
const str = tools.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;name&quot;&gt;这是h1标签&lt;/h1&gt;
console.log(str)
// 调用 htmlEscape 方法进行还原
const hStr = tools.htmlUnEscape(str)
// 还原的结果 <h1 title="name">这是h1标签</h1>
console.log(hStr)

```

## 开源协议

ISC