const m = require('./dateFormate')
const moment = require('moment')

const dt = new Date()

console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
console.log(m.dateFormate(dt))
console.log(new Date())