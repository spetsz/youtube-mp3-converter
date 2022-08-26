import React from 'react'
import {Link} from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'
import styles from '../styles/nav.module.css'


const {nav, container, nav_brand, nav_logo, nav_menu, nav_item, nav_link} = styles

const Nav = () => {
  return (
    <nav className={nav}>
        <div className={container}>
            
            <div className={nav_brand}>
                <BsYoutube className={nav_logo}/>
                <Link to="/" className={nav_link}>Youtube mp3</Link>
            </div>
          
            <ul className={nav_menu}>
                <li className={nav_item}>
                    <Link to="/" className={nav_link}>Home</Link>
                </li>
                <li className={nav_item}>
                    <Link to="/about" className={nav_link}>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav