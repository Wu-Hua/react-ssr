import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'
import Notfound from './container/Notfound'
import './App.css'

// export default (
//   <div>
//     <Route path="/" exact component={Index}></Route>
//     <Route path="/about" exact component={About}></Route>
//   </div>
// )

// 动态js配置，动态获取
// 改造成js的配置，才能获取组件
export default [
  {
    path: '/',
    component: Index,
    // loadData: Index.loadData,
    exact: true,
    key: 'index',
    // 嵌套路由
    // routes: [{
      // path: '/user',
      // component: User,
      // exact: true,
      // key: 'user'
    // }]
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
  },
  {
    path: '/user',
    component: User,
    exact: true,
    key: 'user'
  },
  {
    component: Notfound
  }
]