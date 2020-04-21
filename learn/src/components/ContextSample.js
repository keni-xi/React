// 组件跨层级的上下文通信，可以使用context,这种模式下会有两个角色，Provider,Consumer
import React, { Component } from 'react';

// 1. 创建上下文
const Context = React.createContext()

const store = {
    name: '恭喜你中奖了',
    sayHi () {
        console.log(this.name)
    }
}

const withProvider = Comp => props => (
    <Context.Provider value={store}>
        <Comp {...props} />
        </Context.Provider>
)


const withConsumer = Comp => props => (
    <Context.Consumer>
        {/* 必须内嵌；一个函数 */}
        {value => <Comp {...props} value={value} />}
    </Context.Consumer>
)

@withConsumer  // withConsumer(Inner)
class Inner extends Component {
    render () {
        console.log('Inner')
        return (
        <div>{this.props.value.name}</div>
        )
    }
}


@withProvider  //withProvider(ContextSample)
class ContextSample extends Component {
    render () {
        console.log('ContextSample')
        return (
            <div>
                <Inner></Inner>
            </div>
        )
    }
}

export default ContextSample
