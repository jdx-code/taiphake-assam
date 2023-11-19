import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Footer from '../components/Footer';
import Map from '/map/1.jpg'

const Contact = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      // Fire the animation
      mainControls.start("visible")

    }
  }, [isInView])

    function handleSubmit () {
        alert('Thank you! Your message has been submitted to our team!')        
    }

    return (
        <>        
        <div ref={ref} className="relative isolate overflow-hidden px-6 py-36 sm:py-36 lg:overflow-visible lg:px-0">  
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">         
  
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <motion.div
              variants = {{
              hidden: { opacity: 0, x: -95},
              visible: { opacity: 1, x: 0},
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration:0.5, delay: 0.25 }}
             className="lg:max-w-lg">
                {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
                <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Reach Us..</h1>
                <p className="mt-6 text-md sm:text-xl leading-8 text-gray-700">
                    Write us at <span className='font-bold italic'>taiphakeassam@gmail.com &nbsp;</span>
                    or fill in the contact form below.
                </p>
            </motion.div>
          </div>
          </div>
  
          <motion.div 
            variants = {{
              hidden: { opacity: 0, x: 95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}
            className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">            
            <img 
                src={Map}
            />
          </motion.div>
          <motion.div             
            variants = {{
              hidden: { opacity: 0, x: -95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}
            className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                              
              <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                <div class="sm:col-span-2">
                    <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                    <div class="mt-2.5">
                    <input type="name" name="name" id="name" autocomplete="name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                               
                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                    <div class="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                
                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                    <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                
                </div>
                <div class="mt-10 border-2 border-green-600 hover:border-green-700">
                    <button type="submit" class="block w-full rounded-md bg-yellow-100 px-3.5 py-2.5 text-center text-sm font-semibold text-green shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Send Message</button>
                </div>
              </form>
  
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
      </>         
    )
}

export default Contact