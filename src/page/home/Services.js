import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../../component/Card/ServiceCard'

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
      <div>{loading && <h1>Loading.......</h1>}</div>
      <div className="grid grid-cols-3 gap-5">
        {services.map((e) => (
          <ServiceCard key={e._id} data={e} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="services">
          <button className="btn my-5">Show All</button>
        </Link>
      </div>
    </div>
  )
}

export default Services
