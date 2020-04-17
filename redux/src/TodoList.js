// Redux = flux + Reduce
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index.js'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreate'
import TodoListUI from './TodoListUI'
import axios from 'axios'
// store 的创建

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
    // console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) //只要store里面的数据发生变化实时获取
  }

  // componentDidMount () {
  //   const action = getInitList()
  //   store.dispatch(action)
  //   console.log(action)
  // }

  componentDidMount () {
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
  //   axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
  //     const data = res.data
  //     const action = initListAction(Object.keys(data.hotComments[0]))
  //     store.dispatch(action)
  //     // dispatch(action)
  //     // console.log(action)
  //     // console.log(data)
  // })
    // const action = getTodoList()
    // store.dispatch(action) //因为此时的store已经集成thunk的功能，
  }

  handleInputChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) // 让管理员听到这句话
  }

  handleStoreChange() {
    console.log('store changed')
    this.setState(store.getState())
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI 
      inputValue={this.state.inputValue} 
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      list={this.state.list}
      handleItemDelete = {this.handleItemDelete}
      />
    )
  }
}

export default TodoList