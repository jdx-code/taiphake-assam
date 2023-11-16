  
const FeatureWithMutipleDescription = ({ features }) => {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 py-24 lg:py-[2.2rem] xl:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{features[0].heading}</h2>
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
          </div>
          <div className="mt-[20rem] grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {features[0].images.map((image) => (
              <img
                src={image.img}
                alt="Image"
                className="w-60 h-auto rounded-lg bg-gray-100"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
export default FeatureWithMutipleDescription