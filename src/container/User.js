import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'

function User(props) {
  return (
    <div>
      <h1>你好{props.userinfo.name},最棒的老师是{props.userinfo.best}!</h1>      
    </div>
  )
}

User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}
export default connect(
  state => ({userinfo: state.user.userinfo}),
  // { getUserInfo }
)(User)
