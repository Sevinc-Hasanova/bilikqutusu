import React from 'react'
import homeImg from '../assets/image/homeImg.png'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const { t }  = useTranslation()
    const navigate = useNavigate()

  return (
    <>
          <div className="homeDetails">
            <p className='homeTitle'>{t("home.title")}</p>
    
          <p className='homeDescription'>{t("home.description")}</p>
          <button className='homeStartButton' onClick={()=>navigate("/examroom")}>{t("home.button")}</button>
    
          <div className="homeImg">
            <img src={homeImg} alt="home image" />
          </div>
          </div>
          </>
  )
}

export default Hero