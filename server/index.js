// 这里的node代码，会用babel处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'
import routes from '../src/App'
import Header from '../src/component/Header'

const store = getServerStore()

const app = express()
//设置服务器静态资源目录
app.use(express.static('public'))


/**
 * 包裹一层 promise 捕获异常，这样 promise.all 就不会接收到异常
 */
const promiseWrapper = (promiseFunc) => {
  return new Promise((resolve, reject) => {
    resolve(promiseFunc)
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

app.get('*', (req, res) => {
  // 获取根据路由渲染出的组件，并且拿到loadData方法 获取数据

  // inside a request
  // 这个数组来存储所有网络请求
  const promises = []
  // 所有的routes通过 ../src/App import 过来的
  routes.some(route => {
    // 通过当前 match 来判断当前是否匹配
    const match = matchPath(req.path, route)
    if (match) {
      const { loadData } = route.component
      // 如果 loadData 存在，说明当前的组件需要异步获取数据
      if (loadData) {
        promises.push(loadData(store))
      }
    }
  })

  // 等待所有网络请求结束再渲染
  Promise.all(promises.map(promis => { return promiseWrapper(promis) })).then(() => {
    // 个react组件，解析成html
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {routes.map(route => <Route {...route}></Route>)}
        </StaticRouter>
      </Provider>
    )
    res.send(`
      <html>
        <head>
          <meta charset8="utf-8"/>
          <title>react ssr</title>
        </head>
        <body>
          <div id='root'>${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `)
  }).catch(() => {
    res.send('报错页面500')
  })
})

app.listen(8080, _ => {
  console.log('App is listenning at port:8080')
})