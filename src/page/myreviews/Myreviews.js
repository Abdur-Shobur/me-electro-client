import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { UserAuth } from '../../auth/Auth'
import dotdot from '../../media/dotdot.gif'

function Myreviews() {
  const [myreview, setmyReview] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(UserAuth)

  const id = user?.uid
  const review = myreview[0]?._id
  useEffect(() => {
    fetch(`http://localhost:5000/review/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setmyReview(data)
      })
  }, [id])

  const delete_review = (e) => {
    fetch(`http://localhost:5000/review/user/${e}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  // delte all review
  const deleteAll_review = (e) => {
    fetch(`http://localhost:5000/services/delete/${e}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="container mx-auto">
      {loading && (
        <div className="flex justify-center">
          <img className="w-32" src={dotdot} alt="" />
        </div>
      )}
      {review ? (
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
              <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Total Reviews {myreview.length + 1}
              </p>
              <button
                onClick={() => deleteAll_review(id)}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Delete All
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {loading ? (
            ''
          ) : (
            <div>
              <div className="bg-white py-6 sm:py-8 lg:py-12 mt-10 mb-40">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                  <div className="flex flex-col items-center">
                    <a
                      href="/"
                      className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 mb-8"
                      aria-label="logo"
                    >
                      <svg
                        width="95"
                        height="94"
                        viewBox="0 0 95 94"
                        className="w-6 h-auto text-indigo-500"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                      </svg>
                      Hello User
                    </a>

                    <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4"></p>
                    <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
                      You did not add any review
                    </h1>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
                      First You need to add Reviews then you can see all your
                      reviews here
                    </p>

                    <Link
                      to="/"
                      className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                      Go home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Myreviews
