// useMemo {useCallback} 优化react Hooks 程序的性能
import React, { useState, useMemo } from 'react'

function Example () {
    const [wn, setWn] = useState('蜗牛coding')
    const [zm, setZm] = useState('猛哥coding')

    return (
        <>
        <button onClick={() => {setWn(new Date().getTime())}}>蜗牛</button>
        <button onClick={() => {setZm(new Date().getTime()+',猛哥很帅')}}>猛哥</button>
        <ChildComponent name={zm}>{wn}</ChildComponent>
        </>
    )
}

function ChildComponent ({name, children}) {
    function changeZm (name) {
        console.log('猛哥，他来了')
        return name + ',猛哥向我们走来了'
    }
    
    const actionZm = useMemo(() => changeZm(name), [name])

    return (
        <>
            <div>{actionZm}</div>
            <div>{children}</div>
        </>
    )
}
export default Example