import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ data }) {
  const { _id, service_name, service_details, rating, price } = data
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-60">
        <img
          className="h-full object-cover"
          src="https://placeimg.com/200/280/arch"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{service_details.slice(0, 70)}...</p>
        <p>{rating}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/service/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
