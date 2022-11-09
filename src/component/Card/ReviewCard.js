import React, { useEffect, useState } from 'react'

function ReviewCard({ details_data }) {
  const [review, setReview] = useState([])
  const id = details_data[0]._id
  useEffect(() => {
    fetch(`http://localhost:5000/review/product/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
  }, [id])

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
            Customer Reviews
          </h2>

          <div className="divide-y">
            {review.map((e) => (
              <div key={e._id} className="flex flex-col gap-3 py-4 md:py-8  ">
                <div>
                  <span className="block text-sm font-bold">
                    {e.user_name || 'No Name'}
                  </span>
                </div>
                <div>{e.review}</div>
                <p className="text-gray-600">{e?.review_message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
