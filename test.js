const tools = require('./Jenny-tools')

const date = tools.dataFormate(new Date())

const htmlStr = '<h1 title="name">这是h1标签</h1>'

console.log(date)
console.log(tools.htmlEscape(htmlStr))
console.log(tools.htmlUnEscape(tools.htmlEscape(htmlStr)))