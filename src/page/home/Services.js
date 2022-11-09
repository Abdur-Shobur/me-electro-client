import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../../component/Card/ServiceCard'
import dotdot from '../../media/dotdot.gif'

function Services() {
  const [loading, setLoadig] = useState(true)
  const [services, set_services] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services?limit=3')
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
          <div className="flex justify-center">
            <img className="w-32" src={dotdot} alt="" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-5">
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
