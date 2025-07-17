import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()
  useEffect(()=>{
    document.body.style.backgroundColor = '#181828'
  },[])
  return (
    <>
  <header class="top-header">
</header>

<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>
  <div class="starfifth"></div>
</div>


<div class="lamp__wrap">
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>
</div>
<section class="error">
  <div class="error__content">
    <div class="error__message message">
      <h1 class="message__title">{t("notFound.title")}</h1>
      <p class="message__text">{t("notFound.message")}</p>
    </div>
    <div class="error__nav e-nav">
      <Link to="/" class="e-nav__link">{t("notFound.homeButton")}</Link>
    </div>
  </div>

</section>

</>
  )
}

export default NotFound