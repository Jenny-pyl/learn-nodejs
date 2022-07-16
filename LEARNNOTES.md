# 2022-07-09
#### 模块
**模块划分:**
1. 内置模块
2. 自定义模块
3. 第三方模块

加载模块使用require会执行模块的所有代码.  

每个模块有一个module对象，其包含了一个模块一些信息，其中exports属性为一个对象，可以使用module.exports对象，将模块内的成员共享出去，供外界使用.  

module.exports === exports true, 模块导出的对象永远以module.exports为准.

第三方模块 === 包  

**npm init -y** 初始化项目的时候创建package.json文件

# 2022-07-16
#### 模块

**包的基本结构:**
package.json文件  包的一些描述(如包名，包版本，包依赖)
index.json文件  包的入口文件
README.md文件 使用说明

**nrm:** nrm can help you easy and fast switch between different npm registries, now include: npm, cnpm, taobao, nj(nodejitsu).

**发布自定义包到npm官网的步骤:**
```js
// 在终端登录到npm，注意此时的npm registry为npm官网
npm login 
// 发布
npm publish
// 删除发布（在72小时有效）
npm unpublish package-name -f
```

#### express:




