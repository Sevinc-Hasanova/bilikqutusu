import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../Modules/Home/view/HomeScreen'
import ExamRoom from '../Modules/examroom/view/ExamRoom'
import NotFound from '../Modules/notfound/NotFound'

const WebRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/examroom' element={<ExamRoom/>}/>


        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default WebRoutes