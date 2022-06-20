const str = 'http://www.baidu.com/index?id=1&name=Jenny'
console.log(str.split(/(https?:\/\/.+)\?((?:&?\w+=\w+)+)/))