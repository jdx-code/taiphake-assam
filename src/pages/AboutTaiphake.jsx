import React from 'react'
import FeatureGrid from '../components/FeatureGrid'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureWithMutipleDescription from '../components/FeatureWithMultipleDescription'
import Footer from '../components/Footer'
import { aboutTaiphake, taiphakeFeatures, songsAndPoetry } from './Data'


const AboutTaiphake = () => { 

  return (
    <>
      <FeatureSectionWithLeftText aboutInfo={aboutTaiphake} /> 
      <FeatureWithMutipleDescription features={taiphakeFeatures} />
      <FeatureGrid features={songsAndPoetry} />
      <Footer />
    </>
  )
}

export default AboutTaiphake