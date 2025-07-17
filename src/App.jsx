import React from 'react'
import WebRoutes from './Routes/WebRoutes'
import Header from './Components/Header'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();

  const hideHeaderRoutes = ['/not-found']
  const isNotFound = location.pathname === "/not-found"
  return (
    <div className='mainBgColor'>
    <div className='appContainer'
    style={{width: isNotFound ? "100%" : "80%", padding:isNotFound? "0" : ""}}
    >
      {!hideHeaderRoutes.includes(location.pathname) && <Header/>}
    <WebRoutes/>
    </div>
    </div>
  )
}

export default App