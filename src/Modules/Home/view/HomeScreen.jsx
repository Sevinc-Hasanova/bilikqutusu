import React from 'react'
import Hero from '../../../Components/Hero'
import TopLanguagesToday from '../../../Components/TopLanguagesToday'
import ExamStatsAndShare from '../../../Components/ExamStatsAndShare'

const HomeScreen = () => {
  
  return (
    <div id='home' >
      <Hero/>
      <TopLanguagesToday/>
      <ExamStatsAndShare/>
    </div>
  )
}

export default HomeScreen
