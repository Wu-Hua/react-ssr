import React from 'react'
import {Link} from 'react-router-dom'

export default ()=>{
  return (
    <div>
      <Link to="/">首页</Link><span> | </span> 
      <Link to="/about">关于</Link><span> | </span>
      <Link to="/user">user</Link><span> | </span>
      <Link to="/abadf">不存在</Link>
    </div>
  )
}