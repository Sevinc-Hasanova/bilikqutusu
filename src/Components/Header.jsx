import React from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header'>
        <Link className="logo">
            <img src={logo} alt="bilik qutusu logo" />
            <span>Bilik Qutusu</span>
        </Link>
        <nav>
            <ul className='navList'>
                <li className="navItem examBox">İmtahanlar</li>
                <li className="navItem resultBox">Nəticələr</li>
                <li className="navItem accountBox">Hesab</li>
                <li className="navItem help">Yardım</li>
            </ul>
        </nav>

        <div className="headerControls">
            <div>dil secimi</div>
            <div>dark/light</div>
        </div>
    </header>
  )
}

export default Header