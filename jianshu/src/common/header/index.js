import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreaters } from './store'
import { Link } from 'react-router-dom'
// import { Link, BrowserRouter } from 'react-router-dom'
import {
    Logo,
    HeaderWrapper,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style'
import { actionCreators } from '../../pages/login/store'

const Header = (props) => {
    const { login, logout } = props
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">
                    <a href="/" className="active">首页</a>
                </NavItem>
                <NavItem className="left">下载APP</NavItem>
                {
                    login ?
                        <NavItem className="right" onClick={logout}>退出登录</NavItem>
                        : <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                }

                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                    >
                        {/* 组件被渲染加类名 slide-enter  slide-enter-active
                                组件被销毁 slide-exit slide-exit-active*/}
                        <NavSearch className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Link to="/write">
                    <Button className="writting">
                        <span className="iconfont">&#xe7c2;</span>写文章
                    </Button>
                </Link>

                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        login: state.login.get('login')
    }
}
//  store.dispatch ====> props
const mapDispatchProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreaters.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreaters.searchBlur())
        },
        logout() {
            dispatch(actionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Header)