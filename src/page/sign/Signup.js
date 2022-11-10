import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../auth/Auth'
import SigninWIthPopUp from './SigninWIthPopUp'
import { Helmet } from 'react-helmet'
import swal from 'sweetalert'
function Signup() {
  const { user, create_user, updateName } = useContext(UserAuth)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  const sign_up_form = (e) => {
    e.preventDefault()
    const target = e.target
    const name = target.name.value
    const photo = target.photo_url.value
    const email = target.email.value
    const password = target.password.value

    create_user(email, password)
      .then((user) => {
        swal('Good job!', 'User Create Success', 'success')
        updateName(name, photo)
          .then((name) => console.log('name: ', name))
          .catch((error) => console.log(error))
        target.reset()
        navigate(from, { replace: true })
      })
      .catch((err) => {
        swal('Sorry!', 'User did not create', 'error')
        navigate('/sign-up')
      })
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Sign up
        </h2>

        <form
          className="max-w-lg border rounded-lg mx-auto"
          onSubmit={sign_up_form}
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Your Name
              </label>
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="Email"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="photo_url"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Photo URL
              </label>
              <input
                name="photo_url"
                placeholder="Add Photo Url"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Sign Up
            </button>

            <SigninWIthPopUp />
          </div>

          <div className="flex justify-center items-center bg-gray-100 p-4">
            <p className="text-gray-500 text-sm text-center">
              Have an account?
              <Link
                to="/sign-in"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
