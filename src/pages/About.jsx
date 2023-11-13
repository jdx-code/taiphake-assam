import React from 'react'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureWithMutipleDescription from '../components/FeatureWithMultipleDescription'

const aboutTaiphake = [
  {
    title: "About Taiphake",
    description: "The Tai Phakes is a lesser known community of Assam with its microscopic existence of less than 2,000 souls who mostly dwell in villages. Tai Phakes migrated from How Kong Valley of Northern Burma (Myanmar) crossing the Patkai Hill Range through Pang Shau Pass in A.D. 1775 and embraced Brahaputra Valley as their home. Residing mostly on the banks of Buridehing River and its myriad tributaries, Tai Phakes continue a harmonious existence with various other ethnic tribes of the area in Nam-Phake and Tipam Phake villages of Dibrugarh District and Bor Phake, Mounglang, Mam Mo, Long Phake, Nonglai, Ningkham Phake and Phaneng Phake villages of Tinsukia District in Assam. A few numbers are scattered in Arunachal Pradesh. They essentially follow Buddhism and pre-Buddhist animistic beliefs, dedicating shrines to spirits or phi in their day-t-day life."
  }
] 

const About = () => { 

  return (
    <>
      <FeatureSectionWithLeftText aboutInfo={aboutTaiphake} /> 
      <FeatureWithMutipleDescription />
    </>
  )
}

export default About