import { fromJS } from 'immutable'
import * as constants from './constants'
// immutable.js（不可改变对象）
// facebook
// 生成 immutable对象

const defaultState = fromJS({
  topicList: [
   
  ],
  articleList: [
   
  ],
  recommendList: [
    
  ],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({ //把多个对象合并成一个对象
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
      case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
      case constants.TOGGLE_SCROL_TOP:
        return state.set('showScroll', action.show)
        // return state.set('articleList', state.get('articleList').concat(action.list))
    default:
      return state
  }
}