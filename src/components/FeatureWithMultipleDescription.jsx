const features = [
    { name: 'Language', description: 'Tai Phakes speak in Tai language, a distinctive dialect of the Tibeto-Chinese language family. The sounds are distinctively tonal and monosyllabic, hence spoken with a melodious intonation. Linguists have corroborated that the language contains six tones in addition to close and open tones, without any tonal mark in their script.' }, 
    { name: 'Literature', description: 'Tai Phake literature is ancient. It includes splendid traditional and cultural accounts, especially in poetry. The rich, spoken and written literature of Tai Phakes reflect their affectionate, lively character, love of freedom and cheerful life.' },
    { name: 'Folklore', description: 'Folklore represents the archaic thought of mankind, their feelings and world view.The Tai Phake language abounds in folklore. The Phake folklore includes Folk Dance, Folk Songs, Pu son lan, Lan Thin Pu, Folk Tales, Khamta, Mantan (Mantras), Proverbs, Myths, Legends etc.' },
    { name: 'Beliefs', description: 'The Tai-Phakes essentially follow Buddhism and pre-Buddhist animistic beliefs, dedicating shrines to spirits or phi in their day-to-day life.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
const FeatureWithMutipleDescription = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Know us more..</h2>
            <p className="mt-4 text-gray-500">
            The Tai phake people are jolly and lovers faies and festivals and Tai Phakes are
not expectional. They are also a lively, marry making people. During the festivals the
Phakes resort to merry making and fun with lively songs.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
export default FeatureWithMutipleDescription