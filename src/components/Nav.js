import React from 'react'
import styles from '../styles/nav.module.css'

const {nav, container, logo, nav_menu, nav_item, nav_link} = styles

const Nav = () => {
  return (
    <nav className={nav}>
        <div className={container}>
            <div className={logo}>
                
            </div>
            <ul className={nav_menu}>
                <li className={nav_item}>
                    <a href="/" className={nav_link}>Home</a>
                </li>
                <li className={nav_item}>
                    <a href="/about" className={nav_link}>About</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav