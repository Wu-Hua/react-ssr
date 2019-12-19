import React, { useState, useEffect, Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import { Redirect } from 'react-router-dom'
function User(props) {
  // 比如登录逻辑
  // 每登录跳转到登录页 判断cookie 判断localStorage
  return (
    <Redirect to="/about">
      {/* <div>
        <h1>你好{props.userinfo.name},最棒的老师{props.userinfo.best}!</h1>
      </div> */}
    </Redirect>
  )
}

User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}
export default connect(
  state => ({ userinfo: state.user.userinfo }),
  // { getUserInfo }
)(User)
