import React from 'react'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureWithMutipleDescription from '../components/FeatureWithMultipleDescription'
import Footer from '../components/Footer'
import { aboutNamphake, namphakeFeatures } from './Data'


const AboutNamphake = () => { 

  return (
    <>
      <FeatureSectionWithLeftText aboutInfo={aboutNamphake} /> 
      <FeatureWithMutipleDescription features={namphakeFeatures} />
      <Footer />
    </>
  )
}

export default AboutNamphake