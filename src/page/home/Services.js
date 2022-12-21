import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../../component/Card/ServiceCard'
import BeatLoader from 'react-spinners/BeatLoader'
function Services() {
  const [loading, setLoadig] = useState(true)
  const [services, set_services] = useState([])
  useEffect(() => {
    fetch('https://assignment11-nine.vercel.app/services?limit=3')
      .then((res) => res.json())
      .then((data) => {
        setLoadig(false)
        set_services(data)
      })
  }, [])

  return (
    <div className="container mx-auto mt-10">
      <div className="relative">
        {loading && (
          <div className="bg-white">
            <div className="flex justify-center items-center h-full">
              <BeatLoader color="#36d7b7" />
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((e) => (
          <ServiceCard key={e._id} data={e} />
        ))}
      </div>
      <div className="flex justify-center">
        {services.length > 0 && (
          <Link to="services">
            <button className="btn my-5">Show All</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Services
