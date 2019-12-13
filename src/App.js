import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'

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
    excet: true,
    key: 'index'
  },
  {
    path: '/about',
    component: About,
    excet: true,
    key: 'about'
  },
]