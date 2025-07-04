import React from 'react'
import homeImg from '../../../assets/image/homeImg.png'

const HomeScreen = () => {
  return (
    <div id='home' >
      <div className="homeDetails">
        <p className='homeTitle'>
        Qarşıdakı uğurun üçün ilk addımı at!
      </p>

      <p className='homeDescription'>
Uğurlu bir texniki müsahibə, yalnız bilik deyil — zamanında hazırlıq, praktiki təcrübə və doğru yanaşma tələb edir.
 </p>
      <button className='homeStartButton'>
        Təcrübə imtahanına başla
      </button>

      <div className="homeImg">
        <img src={homeImg} alt="home image" />
      </div>
      </div>
    </div>
  )
}

export default HomeScreen
