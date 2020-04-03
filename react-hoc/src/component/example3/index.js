import React from 'react'
import User from './User'
import HOC from './OperateRefsHOC'

const ENhanceUser = HOC(User)

class OperateRefs extends React.Component {
    render () {
        return <ENhanceUser name="小明" age={12}></ENhanceUser>
    }
}

export default OperateRefs