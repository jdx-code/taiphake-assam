import React, { useState, Fragment, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import HomePageLogo from '../assets/logo-home.png'
import OtherPageLogo from '../assets/logo-other.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let logo = HomePageLogo

const Navbar = () =>{

    const [nav, setNav] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);   
    const [logo, setLogo] = useState(HomePageLogo); // Use state to track the logo   

    const location = useLocation();
    
    useEffect(() => {
        // Update the logo only if necessary
        if (location.pathname !== '/' && logo !== OtherPageLogo) {
          setLogo(OtherPageLogo);
        } else if (location.pathname === '/' && logo !== HomePageLogo) {
          setLogo(HomePageLogo);
        }
      }, [location, logo]); // Add logo to dependencies

    const activeLink = "text-green-500 border-b-4 border-white p-2"
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        // Set aboutActive to true when either sub-link is active
        const aboutIsActive = window.location.pathname === "/about-taiphake" || window.location.pathname === "/about-namphake";
        setAboutActive(aboutIsActive);
      }, []);

    return(
        <div>
            <div id="navbar" className="flex justify-between items-center h-24 w-full mx-auto px-4">                
                <div className="">
                    <NavLink to="/">
                        <img className="w-[120px] my-8 sm:w-[100px] md:w-[150px] items-start" src={logo} alt="/" />
                    </NavLink>                    
                </div>               
                
                <ul className="hidden md:flex font-bold">
                    <li className="p-4">
                        <NavLink                         
                            to="/"    
                            className={`navbar-link ${({ isActive }) => isActive ? activeLink : ''}`}   
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className={`navbar-link`}
                                >
                                    About                                
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="menuItems absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>                                    
                                    {({ active }) => (
                                        <NavLink                         
                                        to="/about-taiphake"                                          
                                        className={classNames(
                                            active ? 'bg-gray-100 text-green-900' : 'text-green-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Taiphake Community
                                        </NavLink>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                        to="/about-namphake"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-green-900' : 'text-green-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Nam-Phake Village
                                        </NavLink>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/what-to-see"                                                    
                            className={`navbar-link ${({ isActive }) => isActive ? activeLink : ''}`}
                        >
                            What to see
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink                         
                            to="/literature"                        
                            className={`navbar-link ${({ isActive }) => isActive ? activeLink : ''}`}
                        >
                            Literature
                        </NavLink>
                    </li>                
                    <li className="p-4">
                        <NavLink
                            to="/contact"                        
                            className={`navbar-link ${({ isActive }) => isActive ? activeLink : ''}`}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}                
                </div>
                <div className={nav ? "fixed left-0 top-0 w-[85%] h-[100%] z-20 border-r border-r-gray-900 bg-[#f1e7f5] ease-in-out duration-500" : "fixed left-[-100%]"}>                    
                    <img className="w-[90px] items-start ml-4 mt-4" src={OtherPageLogo} />
                    
                    <ul className="uppercase p-4 text-black">
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/"
                                onClick={handleNav}          
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className='uppercase'>
                                    About                                
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute -left-4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                    {({ active }) => (
                                        <NavLink                         
                                        to="/about-taiphake"                                          
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Taiphake Community
                                        </NavLink>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                        to="/about-namphake"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Nam-Phake Village
                                        </NavLink>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/what-to-see"
                                onClick={handleNav}
                            >
                                What to see
                            </NavLink>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <NavLink
                                to="/literature"
                                onClick={handleNav}
                            >
                                Literature
                            </NavLink>
                        </li>
                        <li className="p-4">
                            <NavLink
                                to="/contact"
                                onClick={handleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Navbar;