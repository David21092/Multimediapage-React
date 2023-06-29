import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Home from './Home.jsx'
import Imagegallery from './Imagegallery.jsx'
import Aboutus from './Aboutus.jsx'
import Contact from './Contact.jsx'
import Pricing from './Pricing.jsx'
import Comparison from './ComparisonShower.jsx'

export default function WrapperPage () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Pricing />} />
        <Route path="/gallery" element={<Imagegallery />} />
        <Route path="/Comparison" element={<Comparison />}/>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
