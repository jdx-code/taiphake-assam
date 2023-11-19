import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    return(
        // <div className='footerClass bg-gradient-to-t from-[#b9e769] from-10% via-[#efea5a] via-30% to-[#f1c453] to-90% text-[#772f1a]'>
            <div className='footerClass bg-gradient-to-t from-[#9ece64] from-10% via-[#9ece64] via-30% to-[#fff] to-90% text-[#efgefg]'>
            <div className='w-full max-w-[95%] m-auto p-4 md:pt-8 grid md:grid-cols-6'>
                <div className='w-full max-w-[95%] text-xs font-bold mb-8 col-span-4 md:border-r-2 md:border-green-900'>
                    <p className='font-bold text-lg pb-3 underline'>Important Links</p>
                    <div className='grid grid-cols-6 '>                
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>                            
                                <li className='pb-2'>
                                    <a href="/">Home</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/what-to-see">What to see</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/about-taiphake">Taiphake Community</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/about-namphake">Namphake Village</a>
                                </li>                                
                            </ul>
                        </div>  
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>     
                                <li className='pb-2'>
                                    <a href="/literature">Literature</a>
                                </li>                       
                                <li className='pb-2'>
                                    <a href="/#gallery">Gallery</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/contact">Contact</a>
                                </li>
                                <li className='pb-2'>
                                    <a href="/#poetry">Songs & Poetry</a>
                                </li>                                
                            </ul>
                        </div> 
                        <div className='col-span-6 sm:col-span-2'>
                            <ul>
                                <li className='pb-2'>
                                    <a href="https://en.wikipedia.org/wiki/Tai_Phake_people">Taiphake Wiki</a>
                                </li> 
                                <li className='pb-2'>
                                    <a href="https://en.wikipedia.org/wiki/Theravada">Buddhism</a>
                                </li>                            
                                <li className='pb-2'>
                                    <a href="https://en.wikipedia.org/wiki/Phake_language">Language</a>
                                </li>
                            </ul>
                        </div>             
                    </div>
                </div>
                
                <div className='grid grid-cols-4 col-span-2 text-xs font-bold mb-8'>                    
                    <div className='col-span-3'>
                        <p className='font-bold text-lg pb-3 underline'>Reach Us</p>
                        <p className='pb-1'>Namphake Village</p>
                        <p className='pb-1'>Dibrugarh</p>
                        <p className='pb-1'>Assam, India</p>
                        <p className='pb-1'>+91-xxxxxxxxxx</p>
                        <p className='pb-1'>taiphakeassam@gmail.com</p>                    
                    </div>
                    <div className='col-span-1 grid justify-items-end items-center'>
                        <ul>
                            <li className='pb-4'>
                                <a href="https://twitter.com/zephyrsolx"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.linkedin.com/in/zephyrsolutionsgroup/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.facebook.com/zephyrsolutionsgroup"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a>
                            </li>                            
                        </ul>
                    </div>                    
                </div>                        
            </div>        
            <div className='w-full'>
                <p className='text-center pb-4 text-sm'>
                    <NavLink
                        to="https://www.zephyrsolutionsgroup.com/"
                        target="_blank"
                        className='hover:text-green-700'
                    >
                        Zephyr Solutions
                    </NavLink>
                    &#169; {currentYear} | All rights reserved. \
                </p>                           
            </div>    
            
        </div>        
    )
}

export default Footer;