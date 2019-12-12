// 这里的node代码，会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()

app.get('/',(req,res)=>{
  const Page = <App title='kaideba'></App>
  // 个react组件，解析成html
  const content = renderToString(Page)
  res.send(`
    <html>
      <head>
        <meta charset8="utf-8"/>
        <title>react ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
      </body>
    </html>
  `)
})

app.listen(8080,_=>{
  console.log('监听完毕')
})