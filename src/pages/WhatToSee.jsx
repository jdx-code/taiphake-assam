import React from 'react'
import FeatureWithMultipleDescription from '../components/FeatureWithMultipleDescription'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import Footer from '../components/Footer'
import { whatToSee } from './Data'


const WhatToSee = () => {
  return (
    <div className='pt-32'>
        <FeatureWithMultipleDescription features={whatToSee}/>    
        <ImageSlider />
        <Footer />          
    </div>
  )
}

export default WhatToSee