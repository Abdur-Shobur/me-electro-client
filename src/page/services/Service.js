import { useLoaderData } from 'react-router-dom'
import ReviewCard from '../../component/Card/ReviewCard'
import ReviewForm from './ReviewForm'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'

function Service() {
  const single_data = useLoaderData()
  const product_data = single_data[0]
  const { service_name, service_details, rating, img, price } = product_data
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="flex-1">
            <PhotoProvider>
              <div className="foo">
                <PhotoView src={img}>
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={img}
                  />
                </PhotoView>
              </div>
            </PhotoProvider>
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex-1">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {service_name}
            </h1>

            <p className="leading-relaxed mt-5">{service_details}</p>

            <div className="flex">
              <span className=" mt-6 title-font font-medium text-2xl text-gray-900">
                Total Price: ${price}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <ReviewCard details_data={single_data} />
        </div>
        <div>
          <ReviewForm details_data={single_data} />
        </div>
      </div>
    </section>
  )
}

export default Service
