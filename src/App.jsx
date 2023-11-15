import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutTaiphake from './pages/AboutTaiphake';
import AboutNamphake from './pages/AboutNamphake';
import WhatToSee from './pages/WhatToSee';

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
      </Routes> 
    </>
  )

}

export default App
