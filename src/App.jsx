import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutTaiphake from './pages/AboutTaiphake';
import AboutNamphake from './pages/AboutNamphake';
import WhatToSee from './pages/WhatToSee';
import Literature from './pages/Literature';
import Contact from './pages/Contact'


initFontAwesome();

function App() {  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about-taiphake" element={<AboutTaiphake />} />                 
        <Route path="/about-namphake" element={<AboutNamphake />} />                 
        <Route path="/what-to-see" element={<WhatToSee />} />  
        <Route path="/literature" element={<Literature />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </>
  )

}

export default App
