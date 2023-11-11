import AboutImg from '../assets/about/taiphake-traditional.jpg'

const Try = ( { aboutInfo, features } ) => {
  return (
    <div className="overflow-hidden bg-white sm:bg-red-500 md:bg-yellow-500 lg:bg-pink-500 xl:bg-blue-500 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         <img
            src={AboutImg}
            alt="Product screenshot"
            className="w-[40rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[54rem] lg:w-[48rem] md:-ml-44 lg:-ml-72"
            width={2432}
            height={1442}
          />
          <div className="lg:pr-8 lg:pt-4 lg:px-4">
            <div className="lg:max-w-lg">              
              <p className="mt-2 text-md sm:text-4xl font-bold tracking-tight text-gray-900">{aboutInfo[0].title}</p>
              <p className="mt-6 text-sm sm:text-md text-justify leading-8 text-gray-600">
                {aboutInfo[0].description}
              </p>
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
              <button className='my-4 w-[25%] h-12 rounded-md bg-gray-900 text-white'>Read more</button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Try