import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FeatureSectionWithLeftText from '../components/FeatureSectionWithLeftText'
import FeatureSectionWithRightText from '../components/FeatureSectionWithRightText'
import Try from '../components/Try'

const aboutTaiphake = [
  {
    title: "About Taiphake",
    description: "The Tai Phakes is a lesser known community of Assam with its microscopic existence of less than 2,000 souls who mostly dwell in villages. Tai Phakes migrated from How Kong Valley of Northern Burma (Myanmar) crossing the Patkai Hill Range through Pang Shau Pass in A.D. 1775 and embraced Brahaputra Valley as their home. Residing mostly on the banks of Buridehing River and its myriad tributaries, Tai Phakes continue a harmonious existence with various other ethnic tribes of the area in Nam-Phake and Tipam Phake villages of Dibrugarh District and Bor Phake, Mounglang, Mam Mo, Long Phake, Nonglai, Ningkham Phake and Phaneng Phake villages of Tinsukia District in Assam. A few numbers are scattered in Arunachal Pradesh. They essentially follow Buddhism and pre-Buddhist animistic beliefs, dedicating shrines to spirits or phi in their day-t-day life."
  }
] 

const aboutNamphake = [
  {
    title: "About Namphake Village",
    description: "The Tai Phakes mainly live in villages in the Districts of Dibrugarh and Tinsukia in Assam(India). Tai Phake population in these villages is not more than 2000. Among these villages, the most important in all aspects, is the Namphake Village. There are about 80 houses in this village and the population is around 600. Namphake village is about 60 Km from Dibrugarh Town.",
    basicInfoTitle: "Basic Information about Namphake Village",
    basicInfoLists: [      
      {
        key: "Total Household",
        value: "102"
      },      
      {
        key: "Total Population",
        value: "604 (September, 2018 data)"
      },
      {
        key: "Monastery",
        value: "Namphake Buddhist Monastery"
      },    
    ]
     
  },  
] 

const features = [ 
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',    
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',    
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',    
  },
]

const Home = () => {
  return (
    <div id="main"> 
        <Hero />  
        <FeatureSectionWithLeftText aboutInfo={aboutTaiphake} features={features} />           
        <FeatureSectionWithRightText aboutInfo={aboutNamphake}/>
        <Footer />
    </div>
  )
}

export default Home