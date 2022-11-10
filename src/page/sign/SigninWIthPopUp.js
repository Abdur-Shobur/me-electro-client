import React, { useContext } from 'react'
import { UserAuth } from '../../auth/Auth'
import { AiFillGithub } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

function SigninWIthPopUp() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'

  const {
    sign_in_google_pop_up,
    sign_in_git_hub_pop_up,
    loading,
    setLoading,
  } = useContext(UserAuth)

  //   google pop up
  const on_google_sign_in = () => {
    sign_in_google_pop_up()
      .then((res) => {
        navigate(from, { replace: true })
      })
      .catch((err) => {
        navigate('/sign-in')
        setLoading(false)
      })
  }

  //   git hub pop up
  const on_git_hub_sign_in = () => {
    sign_in_git_hub_pop_up()
      .then((res) => {
        navigate(from, { replace: true })
      })
      .catch((err) => {
        navigate('/sign-in')
        setLoading(false)
      })
  }
  return (
    <>
      <div className="flex justify-center items-center relative">
        <span className="h-px bg-gray-300 absolute inset-x-0"></span>
        <span className="bg-white text-gray-400 text-sm relative px-4">
          Log in with social
        </span>
      </div>
      <button
        onClick={on_git_hub_sign_in}
        className="flex justify-center items-center bg-stone-500 hover:bg-stone-600 active:bg-stone-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
      >
        <AiFillGithub className="w-5 h-5 shrink-0" />
        Continue with Git Hub
      </button>
      <button
        onClick={on_google_sign_in}
        className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
      >
        <svg
          className="w-5 h-5 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
            fill="#4285F4"
          />
          <path
            d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
            fill="#34A853"
          />
          <path
            d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
            fill="#FBBC05"
          />
          <path
            d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>
    </>
  )
}

export default SigninWIthPopUp
