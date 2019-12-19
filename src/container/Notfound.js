import React from 'react'
import { Route } from 'react-router-dom'

function Status({ code, children }) {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statuscode = code // 404
      }
      return children
    }}></Route>
  )
}

function Notfound(props) {
  // console.log('notfound11', props)
  // 渲染了这个组件，给 staticContext 赋值, statuscode = 404
  return (
    <Status code={404}>
      <h1>Notfound</h1>
    </Status>
  )
}

export default Notfound