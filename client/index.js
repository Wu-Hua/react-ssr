import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../src/App'
import store from '../src/store/store'

// 注水 客户端入口
const Page = (
  <Provider store={store}>
    <BrowserRouter>
      {routes.map(route => <Routes {...route}></Routes>)}
    </BrowserRouter>
  </Provider>
)
ReactDom.hydrate(Page, document.getElementById('root'))