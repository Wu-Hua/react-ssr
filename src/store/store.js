// 存储入口
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
  index: indexReducer,
  user: userReducer
})

const serverAxios = axios.create({
  baseURL: 'http://localhost:9090/'
})
const clientAxios = axios.create({
  baseURL: '/'
})
// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

export const getClientStore = ()=>{
  // 客户端
  // 通过 window.__context 来获取数据
  const defaultState = window.__context ? window.__context : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

export const getServerStore = () => {
  // 服务端用
  // 通过server的dispatch来获取和充实
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}