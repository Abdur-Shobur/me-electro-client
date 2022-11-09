import React, { useEffect, useState } from 'react'
import ServiceCard from '../../component/Card/ServiceCard'
import loading_img from '../../media/loading.gif'

function Services() {
  const [services, set_services] = useState([])
  const [loading, setLoadig] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => {
        setLoadig(false)
        set_services(data)
      })
  }, [])

  return (
    <div className="container mx-auto my-10">
      <div>
        <div>
          {loading && (
            <div className="flex justify-center">
              <img className="" src={loading_img} alt="" />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {services.map((e) => (
          <ServiceCard key={e._id} data={e} />
        ))}
      </div>
    </div>
  )
}

export default Services
