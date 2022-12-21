import React, { useEffect, useState } from 'react'
import ServiceCard from '../../component/Card/ServiceCard'
import { Helmet } from 'react-helmet'
import BeatLoader from 'react-spinners/BeatLoader'
function Services() {
  const [services, set_services] = useState([])
  const [loading, setLoadig] = useState(true)

  useEffect(() => {
    fetch('https://assignment11-nine.vercel.app/services')
      .then((res) => res.json())
      .then((data) => {
        setLoadig(false)
        set_services(data)
      })
  }, [])

  return (
    <div className="container mx-auto my-10">
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <div className="my-10">
        <div className="bg-stone-100 py-6 sm:py-8 lg:py-12 rounded-lg">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="max-w-xl flex flex-col items-center text-center mx-auto">
              <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                My All Servies
              </p>

              <h1 className="text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
                I'm Providing Best services For You
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {loading && (
            <div className="  bg-white">
              <div className="flex justify-center items-center h-full">
                <BeatLoader color="#36d7b7" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((e) => (
          <ServiceCard key={e._id} data={e} />
        ))}
      </div>
    </div>
  )
}

export default Services
