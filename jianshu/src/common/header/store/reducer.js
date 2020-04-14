import * as types from './actionTypes'
import { fromJS } from 'immutable'
// immutable.js（不可改变对象）
// facebook
// 生成 immutable对象

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
if(action.type === types.SEARCH_FOCUS){
  // immutable 对象的set方法， 会结合之前immutable 对象的值和设置的值，返回一个全新的值（相当于深拷贝）
  return state.set('focused', true)
}
if(action.type === types.SEARCH_BLUR){
  return state.set('focused', false)
}
return state
}