import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { UserAuth } from '../../auth/Auth'
function ServiceCard({ data }) {
  const { _id, service_name, service_details, rating, price, img } = data
  const { user } = useContext(UserAuth)
  console.log(user)
  const delete_service = (e) => {
    fetch(`http://localhost:5000/services/${e}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((err) => console.log(err))
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="min-w-[150px] ">
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={img}>
              <img className="h-full object-cover" src={img} alt="a" />
            </PhotoView>
          </div>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{service_details.slice(0, 70)}...</p>
        <p>{rating}</p>
        <p>{price}</p>
        {user && (
          <button
            onClick={() => delete_service(_id)}
            className="absolute right-5 top-2"
          >
            <AiOutlineDelete className="text-red-600 text-2xl hover:text-red-500" />
          </button>
        )}
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
