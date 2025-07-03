import React from 'react'
import WebRoutes from './Routes/WebRoutes'
import Header from './Components/Header'

const App = () => {
  return (
    <div className='mainBgColor'>
    <div className='appContainer'>
      <Header/>
    <WebRoutes/>
    </div>
    </div>
  )
}

export default App