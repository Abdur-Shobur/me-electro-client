import React from 'react'
import { useLoaderData } from 'react-router-dom'
import swal from 'sweetalert'

function EditReview() {
  const single_review_data = useLoaderData()
  const single_data = single_review_data[0]
  const { review_message, review } = single_data

  const review_submit = (e) => {
    e.preventDefault()
    const Reviews = e.target.review.value
    const review_messages = e.target.review_message.value
    single_data.review = Reviews
    single_data.review_message = review_messages
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
          return fetch(
            `https://assignment11-nine.vercel.app/review/${single_data._id}`,
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(single_data),
            },
          )
            .then((res) => res.json())
            .then((result) => {
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
      <section className="text-gray-600 body-font relative my-20">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Do you want to Edit any review?
          </h2>

          <form onSubmit={review_submit}>
            <div className="relative mb-4">
              <label
                htmlFor="review"
                className="leading-7 text-sm text-gray-600"
              >
                Review
              </label>
              <input
                defaultValue={review}
                type="text"
                id="review"
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
                defaultValue={review_message}
                id="review_message"
                name="review_message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Add Review
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EditReview
