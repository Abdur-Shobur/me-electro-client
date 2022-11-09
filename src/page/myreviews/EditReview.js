import React from 'react'

function EditReview() {
  const review_submit = (e) => {
    e.preventDefault()
    const review = e.target.review.value
    const review_message = e.target.review_message.value
  }
  return (
    <div>
      <section className="text-gray-600 body-font relative border-t-4">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Do you want to add any review?
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Your Review is imoportant for us
          </p>
          <form onSubmit={review_submit}>
            <div className="relative mb-4">
              <label
                htmlFor="review"
                className="leading-7 text-sm text-gray-600"
              >
                Review
              </label>
              <input
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
                id="review_message"
                name="review_message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Add Review
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </section>
    </div>
  )
}

export default EditReview
