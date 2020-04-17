import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreate'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
    const action = initListAction(Object.keys(res.data.hotComments[0]))
    yield  put(action)
  }catch(e) {
    console.log('网络请求失败')
  }

  //  axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
  //   const data = res.data
  //   const action = initListAction(Object.keys(data.hotComments[0]))
  //   put(action)
  //   // dispatch(action)
  //   console.log(action)
  //   // console.log(data)
  // })
}

function* mySaga() {  //saga必须要是一个generator函数
  yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;