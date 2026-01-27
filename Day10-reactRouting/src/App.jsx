import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Info from './assets/pages/Info'
import Contact from './assets/pages/Contact'
import  './App.css'
import Navbar from './assets/Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
     <Routes >
        <Route path='/Info' element={<Info />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Home' element={<Home />}/>
     </Routes>
    </div>
  )
}

export default App