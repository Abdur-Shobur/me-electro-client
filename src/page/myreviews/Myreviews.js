import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { UserAuth } from '../../auth/Auth'

function Myreviews() {
  const [myreview, setmyReview] = useState([])
  const { user } = useContext(UserAuth)

  const id = user?.uid

  useEffect(() => {
    fetch(`http://localhost:5000/review/user/${id}`)
      .then((res) => res.json())
      .then((data) => setmyReview(data))
  }, [id])

  const delete_review = (e) => {
    fetch(`http://localhost:5000/review/user/${e}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Your all reviews here
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Which review you want to delete and modify you can do it
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Services Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Review Messagae
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Review *
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Edit
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {myreview?.map((e) => (
                  <tr key={e?._id}>
                    <td className="px-4 py-3">{e.service_name}</td>
                    <td className="px-4 py-3">
                      {e.review_message.slice(0, 30)}...
                    </td>
                    <td className="px-4 py-3">{e?.review}</td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <Link to={`edit-reivew/${e._id}`}>
                        <AiFillEdit className="text-blue-700 hover:text-blue-500 text-xl" />
                      </Link>
                    </td>
                    <td className="w-10 text-center">
                      <button onClick={() => delete_review(e?._id)}>
                        <AiFillDelete className="text-red-700 hover:text-red-500 text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <Link
              to="/services"
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Services Page
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Delete All
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Myreviews
