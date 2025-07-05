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
                <li className="navItem home"><Link>Ana səhifə</Link></li>
                <li className="navItem examBox"><Link>İmtahanlar</Link></li>
                <li className="navItem accountBox"><Link>Hesab</Link></li>
                <li className="navItem about"><Link>Haqqımızda</Link></li>
                <li className="navItem help"><Link>Yardım</Link></li>
            </ul>
        </nav>

        <div className="headerControls">
            <div>dil secimi</div>
        </div>
    </header>
  )
}

export default Header