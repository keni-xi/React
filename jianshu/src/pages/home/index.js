import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends Component {
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  conponentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0,0)
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/8357505-951bf44017330232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
        {
          this.props.showScroll 
          ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> 
          : null
        }
        
      </HomeWrapper>
    )
  }
}
const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    // dispatch(action)
    action(dispatch)
  },
  changeScrollTopShow(e) {
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
    console.log(document.documentElement.scrollTop)
  }
})
export default connect(mapState, mapDispatch)(Home)