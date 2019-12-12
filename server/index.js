// 这里的node代码，会用babel处理
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import App from '../src/App'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {

  // const Page = <App title='kaideba'></App>
  // 个react组件，解析成html
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        {App}
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
        <script src="./bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(8080, _ => {
  console.log('监听完毕')
})