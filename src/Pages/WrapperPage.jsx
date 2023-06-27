import Home from './Home.jsx'
import Beforefter from './Beforeafter.jsx'
import Imagegallery from './Imagegallery.jsx'
// import Help from '../components/FAQ';
// import About from "./About"
// import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar.jsx'
export default function WrapperPage () {
  return (
        <div>
          <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/plans' element={<Navbar />} />
                <Route path='/gallery' element={<Imagegallery />} />
                <Route path='/beforeAfter' element={<Beforefter />} />
                <Route path='/about' element={<Navbar />} />
                <Route path='/faq' element={<Navbar />} />
                <Route path='/contact' element={<Navbar />} />
            </Routes>
        </div>
  )
}
