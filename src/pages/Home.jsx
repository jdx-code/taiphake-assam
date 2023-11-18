import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureSectionWithRightText from '../components/FeatureSectionWithRightText'
import Try from '../components/Try'
import GalleryLightbox from '../components/GalleryLightbox/GalleryLightbox'
import { aboutTaiphake, aboutNamphake } from './Data'

const Home = () => {
  return (
    <div id="main"> 
        <Hero />  
        <FeatureSectionWithLeftText aboutInfo={aboutTaiphake} />           
        <FeatureSectionWithRightText aboutInfo={aboutNamphake}/>
        <div className='py-12'>
          <GalleryLightbox />
        </div>        
        <Footer />
    </div>
  )
}

export default Home