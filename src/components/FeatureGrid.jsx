// import { CheckCircleIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FeatureGrid = ( {features} ) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">          
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            {features[0].title}
          </p>
          <p className="mt-6 text-md sm:text-lg leading-8 text-gray-600">
            {features[0].desc}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features[0].content.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    {/* <CheckCircleIcon className='text-gray-400'/>   */}
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#7fb33f' }}/>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
export default FeatureGrid