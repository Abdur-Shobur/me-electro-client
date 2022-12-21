import React, { useEffect, useState } from 'react'
import SingleReviewCard from './Single_reivew_card'

function ReviewCard({ details_data, set }) {
  const [review, setReview] = useState([])

  const id = details_data[0]._id
  useEffect(() => {
    fetch(`https://assignment11-nine.vercel.app/review/product/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
  }, [id, set])

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
            Customer Reviews
          </h2>
          <div>
            {review.length < 1 ? (
              <h1 className="text-center text-xl text-red-900">
                There is no Review here
              </h1>
            ) : (
              ''
            )}
          </div>

          <div className="divide-y">
            {review?.map((e) => (
              <SingleReviewCard key={e._id} data={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
