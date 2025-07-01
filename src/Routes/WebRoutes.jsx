import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../Modules/Home/view/HomeScreen'

const WebRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
    </Routes>
  )
}

export default WebRoutes