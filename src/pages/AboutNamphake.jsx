import React from 'react'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureWithMutipleDescription from '../components/FeatureWithMultipleDescription'
import Footer from '../components/Footer'
import { aboutNamphake, namphakeFeatures } from './Data'


const AboutNamphake = () => { 

  return (
    <div className='pt-24'> 
      <FeatureSectionWithLeftText aboutInfo={aboutNamphake} /> 
      <FeatureWithMutipleDescription features={namphakeFeatures} />
      <Footer />
    </div>
  )
}

export default AboutNamphake