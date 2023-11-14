import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutTaiphake from './pages/AboutTaiphake';
import AboutNamphake from './pages/AboutNamphake';

initFontAwesome();

function App() {  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about-taiphake" element={<AboutTaiphake />} />                 
        <Route path="/about-namphake" element={<AboutNamphake />} />                 
      </Routes> 
    </>
  )

}

export default App
