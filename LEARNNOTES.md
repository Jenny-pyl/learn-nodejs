# 2022-07-09
#### 模块
模块划分:
1. 内置模块
2. 自定义模块
3. 第三方模块

加载模块使用require会执行模块的所有代码.  

每个模块有一个module对象，其包含了一个模块一些信息，其中exports属性为一个对象，可以使用module.exports对象，将模块内的成员共享出去，供外界使用.  

module.exports === exports true, 模块导出的对象永远以module.exports为准.

第三方模块 === 包
