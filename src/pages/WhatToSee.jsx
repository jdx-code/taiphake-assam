import React from 'react'
import FeatureWithMultipleDescription from '../components/FeatureWithMultipleDescription'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import Footer from '../components/Footer'
import { whatToSee } from './Data'


const WhatToSee = () => {
  return (
    <>
        <FeatureWithMultipleDescription features={whatToSee}/>    
        <ImageSlider />
        <Footer />          
    </>
  )
}

export default WhatToSee