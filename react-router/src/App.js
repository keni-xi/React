import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-"

// react router 其中包含三种类型 ，1. 路由组件 2. 路由匹配组件 3. 导航组件
// 路由组件：BrowserRouter  HashRouter
// 路由匹配组价: route  Switch
// 导航组件： Link

function Header () {
  return (
    <ul>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        About
      </li>
      <li>
        Topics
      </li>
    </ul>
  )
}
function App () {
  return (
    <Router>
      <div>
        
      </div>
    </Router>
  )
}