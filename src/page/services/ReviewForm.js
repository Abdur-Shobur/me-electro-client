import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../auth/Auth'
import swal from 'sweetalert'

function ReviewForm({ details_data, setNew, set }) {
  const [sub_rev, set_sub_rev] = useState(1)
  const { user } = useContext(UserAuth)
  const user_name = user?.displayName || 'Unregister User'
  const user_photo = user?.photoURL
  const user_id = user?.uid
  const service_name = details_data[0].service_name
  const id = details_data[0]._id
  const time = new Date().toISOString()
  const btn_rev_hendel = (e) => {
    set_sub_rev(e)
  }

  const review_submit = (e) => {
    e.preventDefault()
    const review_message = e.target.review_message.value
    const value = {
      porduct_id: id,
      service_name,
      review: sub_rev,
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
          return fetch('https://assignment11-nine.vercel.app/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(value),
          })
            .then((res) => res.json())
            .then((data) => {
              e.target.reset()
              setNew(!set)
              swal('Thanks! Your Review Added!', {
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
          <p className="leading-relaxed mb-3 text-gray-600">
            Your Review is imoportant for us
          </p>

          {user_id ? (
            <div>
              <p className="leading-relaxed mb-2 text-gray-600">Review:</p>
              <div className="flex gap-2">
                <p
                  onClick={() => btn_rev_hendel('1')}
                  className={`btn btn-md bg-yellow-600 border-none ${
                    sub_rev === '1' ? '!bg-blue-500' : ''
                  }`}
                >
                  1*
                </p>
                <p
                  onClick={() => btn_rev_hendel('2')}
                  className={`btn btn-md bg-yellow-600 border-none ${
                    sub_rev === '2' ? '!bg-blue-500' : ''
                  }`}
                >
                  2*
                </p>
                <p
                  onClick={() => btn_rev_hendel('3')}
                  className={`btn btn-md bg-yellow-600 border-none ${
                    sub_rev === '3' ? '!bg-blue-500' : ''
                  }`}
                >
                  3*
                </p>
                <p
                  onClick={() => btn_rev_hendel('4')}
                  className={`btn btn-md bg-yellow-600 border-none ${
                    sub_rev === '4' ? '!bg-blue-500' : ''
                  }`}
                >
                  4*
                </p>
                <p
                  onClick={() => btn_rev_hendel('5')}
                  className={`btn btn-md bg-yellow-600 border-none ${
                    sub_rev === '5' ? '!bg-blue-500' : ''
                  }`}
                >
                  5*
                </p>
              </div>

              <form onSubmit={review_submit}>
                <div className="relative mb-4 mt-3">
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
            </div>
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
