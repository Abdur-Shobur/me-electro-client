import React from 'react'
import { AiOutlineUser, AiFillStar } from 'react-icons/ai'

function Single_reivew_card({ data }) {
  const { review } = data
  let rev = []
  for (let i = 0; i < parseInt(review); i++) {
    rev.push(i)
  }

  return (
    <div key={data._id} className="flex py-4 md:py-8 gap-3 ">
      <div>
        {data?.user_photo ? (
          <img className="rounded-full w-14 " src={data.user_photo} alt="" />
        ) : (
          <AiOutlineUser className="text-5xl" />
        )}
      </div>
      <div className="flex flex-col gap-3 ">
        <div>
          <span className="block text-sm font-bold">
            {data.user_name || 'No Name'}
          </span>
        </div>
        <div className="flex gap-1">
          {rev.map((e) => (
            <AiFillStar key={e} className="text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600">{data?.review_message}</p>
      </div>
    </div>
  )
}

export default Single_reivew_card
