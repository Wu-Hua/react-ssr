# 开课吧 react-ssr 拓展

## ssr 服务器端渲染（Server Side Rendering）优缺点

### 优点
* 首屏渲染快，不需要初始加载很多资源。
* 有利于SEO，前端动态渲染的内容是不能被抓取到的，而使用服务端渲染就可以解决这个问题。

### 缺点
* 服务端压力较大,本来是通过客户端完成渲染，现在统一到服务端node服务去做。
* 学习成本相对较高,相对于客户端渲染，项目构建、部署过程更加复杂。(ps：现在还是有很多技术运用的不够娴熟(╯﹏╰))
