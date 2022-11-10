import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../auth/Auth'
import swal from 'sweetalert'

function ReviewForm({ details_data }) {
  const { user } = useContext(UserAuth)
  console.log(user)
  const user_name = user?.displayName || 'Unregister User'
  const user_photo = user?.photoURL
  const user_id = user?.uid
  const service_name = details_data[0].service_name
  const id = details_data[0]._id
  const time = new Date().toISOString()
  const review_submit = (e) => {
    e.preventDefault()
    const review = e.target.review.value
    const review_message = e.target.review_message.value
    const value = {
      porduct_id: id,
      service_name,
      review,
      review_message,
      user_id,
      user_name,
      user_photo,
      time,
    }

    if (e) {
      return swal({
        title: 'Do You want to add review?',
        text: '',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          return fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(value),
          })
            .then((res) => res.json())
            .then((data) => {
              e.target.reset()
              swal('Poof! Your imaginary file has been deleted!', {
                icon: 'success',
              })
            })
        }
      })
    }
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative border-t-4 ">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  mx-auto w-full mt-5 md:mt-10 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Do you want to add any review?
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Your Review is imoportant for us
          </p>

          {user_id ? (
            <form onSubmit={review_submit}>
              <div className="relative mb-4">
                <label
                  htmlFor="review"
                  className="leading-7 text-sm text-gray-600"
                >
                  Review
                </label>
                <input
                  required
                  type="number"
                  id="review"
                  min="1"
                  placeholder="add review min 1 max 5"
                  max="5"
                  name="review"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="review_message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Review Message
                </label>
                <textarea
                  required
                  placeholder="Write Review message"
                  id="review_message"
                  name="review_message"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Add Review
                </button>
              </div>
            </form>
          ) : (
            <Link
              to="/sign-in"
              className="btn bg-blue-600 hover:bg-blue-700 border-none"
            >
              You Have to Login First
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default ReviewForm
