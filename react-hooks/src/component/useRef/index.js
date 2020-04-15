// useRef 获取DOM元素

import React, { useRef } from 'react'

function Example () {
    // inputEl这个变量是useRef函数的返回值，那么这个变量给谁当ref属性，就能表示在哪里
    const inputEl = useRef(null)

    const onButtonClick = () => {
        inputEl.current.value = '猛哥贼拉帅'
        console.log(inputEl)
    }
    return (
        <>
        <input ref={inputEl} type="text"/>
        <button onClick={onButtonClick}>在Input上展示文字</button>
        </>
    )
}

export default Example