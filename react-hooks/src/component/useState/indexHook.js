import React, { useState } from 'react'
// userState 就是一个HOOK
function Example () {
    const [count, setCount ] = useState(0)

    // let _useState = useState(0)
    // let count = _useState
    // let setCount = _useState
    return (
        <div>
             <p>你点了{count}次</p>
                <button onClick={() => {setCount(count + 1)}}>click me</button>
        </div>
    )
}

// useState 多状态
let showSex = true
function Example2 () {
    // const [count, name, age, setCount, setName, setAge ] = useState(0, '')
    const [ age, setAge ] = useState(18)
    // if(showSex) {
    //     const [ sex, setSex ] = useState('男')
    //     showSex = false
    // }
    const [ sex, setSex ] = useState('男')
    const [ work, setWork ] = useState('前端程序员')

    // react是如何保证useState找到自己对应的state
    // react 是根据useState出现的程序来确定的
    // react Hooks 不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序

    return (
        <div>
            <p>蜗牛 今年：{age} 岁</p>
            <p>性别: {sex}</p>
            <p>工作量：{work}</p>
        </div>
    )
}
export default Example2

// hooks 本质上就是一类特殊的函数  不用再写class类 ， 让function一统江湖