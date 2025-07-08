import React from 'react'
import homeImg from '../../../assets/image/homeImg.png'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const { t }  = useTranslation()
  return (
    <div id='home' >
      <div className="homeDetails">
        <p className='homeTitle'>{t("home.title")}</p>

      <p className='homeDescription'>{t("home.description")}</p>
      <button className='homeStartButton'>{t("home.button")}</button>

      <div className="homeImg">
        <img src={homeImg} alt="home image" />
      </div>
      </div>
    </div>
  )
}

export default HomeScreen
