import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
    id: 1,
    filename: 'Tai Buddhist Community in North-East India Globalization threat to their identity',
    author: 'Dr Gitimallika',
    src: '/articles/1.pdf'
  },
  {
    id: 2,
    filename: 'NAMPHAKE VILLAGE AND CULTURE OF TAI PHAKES',
    author: '',
    src: '/articles/2.pdf'
  },
  {
    id: 3,
    filename: 'Tai Buddhist Community in North-East India Globalization threat to their identity',
    author: 'Dr Gitimallika',
    src: '/articles/1.pdf'
  },
  {
    id: 4,
    filename: 'NAMPHAKE VILLAGE AND CULTURE OF TAI PHAKES',
    author: '',
    src: '/articles/2.pdf'
  },
]


const Resources = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">        
          <div className="lg:pl-[1.99rem] lg:pt-4">
            <div className="lg:max-w-lg">              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Most Popular Reads</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  
                  {articles.map((article) => (
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <FontAwesomeIcon icon={faPaperclip} />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">{article.filename}</span>
                          <span className="flex-shrink-0 text-gray-400">{article.author}</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href={article.src} target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>                  
                  ))}
                  
                </ul>
              </dd>
            </div>
              
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Resources