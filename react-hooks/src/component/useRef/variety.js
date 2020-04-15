// useRef 获取DOM元素

import React, { useRef, useState, useEffect } from 'react'

function Example () {
    const inputEl = useRef(null)

    const onButtonClick = () => {
        inputEl.current.value = '猛哥贼拉帅'
        console.log(inputEl)
    }
// ---------------
    const [text, setText] = useState('猛哥')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log(textRef.current)
    })
// ---------------
    return (
        <>
        <input ref={inputEl} type="text"/>
        <button onClick={onButtonClick}>在Input上展示文字</button>
        <br/>
        <hr/>
        <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}

export default Example