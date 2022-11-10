import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiFillStar } from 'react-icons/ai'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { UserAuth } from '../../auth/Auth'
import swal from 'sweetalert'

function ServiceCard({ data }) {
  const { _id, service_name, service_details, rating, price, img } = data
  const { user } = useContext(UserAuth)
  let rev = []
  for (let i = 0; i <= parseInt(rating); i++) {
    rev.push(i)
  }

  const delete_service = (e) => {
    if (e) {
      return swal({
        title: 'Are you sure?',
        text:
          'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          return fetch(`http://localhost:5000/services/${e}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((err) => {
              swal('Poof! Your imaginary file has been deleted!', {
                icon: 'success',
              })
            })
        }
      })
    }
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl hover:shadow transition-all">
      <figure className="min-w-[150px] ">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="w-40 h-full object-cover" src={img} alt="a" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>
          {service_details.slice(0, 70)}{' '}
          <span className="text-blue-700 underline">
            <Link to={`/services/service/${_id}`}>Read more...</Link>
          </span>
        </p>

        <div className="flex gap-1">
          {rev.map((e) => (
            <AiFillStar key={e} className="text-yellow-400" />
          ))}
        </div>
        <p className="text-xl font-semibold">
          Price: <span className="text-blue-500">${price}</span>
        </p>
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
