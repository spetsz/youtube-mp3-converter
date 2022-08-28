import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import styles from '../styles/nav.module.css'


const {nav, container, nav_brand, nav_logo, nav_link} = styles

const Nav = () => {
  return (
    <nav className={nav}>
        <div className={container}>
            
            <div className={nav_brand}>
                <BsYoutube className={nav_logo}/>
                <a href="/" className={nav_link}>Youtube mp3</a>
            </div>
          
        </div>
    </nav>
  )
}

export default Nav