import React from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GrLanguage } from "react-icons/gr";

const Header = () => {
    const { t, i18n } = useTranslation()

      const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <header id='header'>
        <Link className="logo">
            <img src={logo} alt="bilik qutusu logo" />
            <span>Bilik Qutusu</span>
        </Link>
        <nav>
            <ul className='navList'>
                <li className="navItem home"><Link>{t("header.home")}</Link></li>
                <li className="navItem examBox"><Link>{t("header.exams")}</Link></li>
                <li className="navItem accountBox"><Link>{t("header.account")}</Link></li>
                <li className="navItem about"><Link>{t("header.about")}</Link></li>
            </ul>
        </nav>

        <div className="headerControls">
            <div>
                <GrLanguage/>
                <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="az">AZ</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="it">IT</option>
            <option value="zh">ZH</option>
            <option value="ja">JA</option>
          </select>
         </div>
        </div>
    </header>
  )
}

export default Header