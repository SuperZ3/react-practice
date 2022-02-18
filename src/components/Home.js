import React, { Component, useCallback, useContext, useState } from 'react';
import moment from 'moment';
import { MyContext } from '../context';
import Child from './child'
import './child.css'
import classNames from 'classnames';

let count = 0
const first=['home','page1','page2','page3']
const second =['home','name1','name2','name3']

const Home = () => {
  const [navs, setNavs] = useState([])
  const [activeNav, setActiveNav] = useState(false)
  const clickNav = (n) => {
    const ele = document.querySelector(`#${n}`)
    ele.scrollIntoView()
    console.log(n)
    setActiveNav(n)
  }
  const onActiveNavChange = useCallback((nav) => {
    if (nav === activeNav) return
    console.log(nav)
    setActiveNav(nav)
  },[activeNav])
  return (
    <div>
      <p onClick={() => setNavs(first)}>first</p>
      <p onClick={() => setNavs(second)}>second</p>
      <ul className='nav'>
        {navs.map(n => (
          <li onClick={() => clickNav(n)} key={n} className={classNames({
            lis: true,
            active: activeNav === n
          })}>{n}</li>
        ))}
      </ul>
      <div style={{height: '700px'}}></div>
      <Child nav={navs} onActiveNavChange={onActiveNavChange}/>
    </div>
  )
}

export default Home
