import React from "react";
import { NavLink } from "react-router-dom";
import ChooseUsImage from '../assets/about/about-namphake.jpg'

const FeatureSectionWithRightText = ({aboutInfo}) => {
    return (
        <div className="w-full bg-white px-4 py-12">
            <div className="max-w-full mx-auto grid text-[#2c0f37] md:grid-cols-2 bg-red-500">
                <img className="w-[300px] mx-auto my-4 md:w-[400px]" src={ChooseUsImage} alt="/" />
                <div className="font-bold flex flex-col justify-center items-center text-center md:items-start md:text-left">
                    <h1 className="text-2xl sm:text-4xl font-black py-2">{aboutInfo[0].title}</h1>
                    <p className="text-sm sm:text-md py-2">{aboutInfo[0].description}</p>                    

                    
                    <div className="px-2 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">{aboutInfo[0].basicInfoTitle}</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{aboutInfo[0].basicInfoLists[0].totalHouseHold}</p>
                    </div>
                    <div className="mt-2 border-t border-gray-100">
                        {aboutInfo[0].basicInfoLists.map((info, index) => (
                            <dl className="divide-y divide-gray-100" key={index}>
                                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">{info.key}</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{info.value}</dd>
                                </div>
                            </dl>
                        ))}
                    </div>
                    <button className="w-[115px] bg-gray-100 text-[#2c0f37] border-2 border-[#2c0f37] text-sm px-2 py-3 mx-auto md:mx-0 my-4 rounded-md sm:w-[145px] md:w-[160px] sm:text-lg md:text-xl hover:bg-[#2c0f37] hover:text-gray-100 hover:transition duration-150">
                        <NavLink to="/contact">Know more..</NavLink>                        
                    </button>
                </div>
            </div>            
        </div>
    )
}

export default FeatureSectionWithRightText;