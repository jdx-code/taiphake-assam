import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 

const FeatureWithMutipleDescription = ({ features }) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      // Fire the animation
      mainControls.start("visible")

    }
  }, [isInView])

    return (
      <div ref={ref} className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 py-4 lg:py-[2.2rem] xl:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <motion.div
            variants = {{
              hidden: { opacity: 0, x: -95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}
          >

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#020202]">
              {features[0].heading}
            </h2>

            <p className="mt-4 text-gray-500">
              {features[0].title}               
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features[0].content.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
            
          </motion.div>
          <motion.div 
            variants = {{
              hidden: { opacity: 0, x: 95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}
            className="mt-[8rem] grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"  
          > 
            {features[0].images.map((image) => (
              <motion.img                
                src={image.img}
                alt="Image"
                className="w-60 h-auto rounded-lg bg-gray-100"
              />
            ))}
          </motion.div>
        </div>
      </div>
    )
  }
export default FeatureWithMutipleDescription