// Hook  它可以在不编写class 的情况下使用state内部的状态和React

// 使用state Hook
import React,{ useState, useEffect } from 'react'

// class HooksTest extends Component {
//     constructor (props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }

//     render () {
//         return (
//             <div>
//                 <p>You clicked {count} times</p>
//                 {/* 调用setCount, 修改状态 count */}
//                 <button onClick={() => setCount(count + 1)}></button>
//             </div>
//         )
//     }
// }



export default function HooksTest () {
    // useState(initialState),初始化状态，返回一个状态变量和它的更新
    // 声明一个新的叫做“count” 的 state 变量
    const [count, setCount] = useState(0)


    // 数据获取,设置订阅，以及手动更改React 组件中的DOM  -- 副作用
    useEffect(() => {
        document.title = `你点击了${count}次`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* 调用setCount, 修改状态 count */}
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}