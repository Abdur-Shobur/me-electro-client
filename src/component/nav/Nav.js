import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../auth/Auth'

function Nav() {
  const { user, sign_out } = useContext(UserAuth)
  const user_sing_out = () => {
    sign_out()
      .then((res) => console.log('Success log out'))
      .catch((err) => console.log(err))
  }
  const u_id = user?.uid
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                class="w-5 h-auto text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              <span className="ml-3">ME ElecTro</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="services">Services</Link>
              </li>
              {u_id && (
                <li>
                  <Link to="my-reviews">My reviews</Link>
                </li>
              )}
              {u_id && (
                <li>
                  <Link to="add-service">Add service</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            {u_id ? (
              <>
                <h1>{user?.displayName || 'Unregister'}</h1>
                <button
                  onClick={user_sing_out}
                  className="btn mx-2 bg-red-700 border-none btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn mx-2 btn-sm border-none" to="/sign-in">
                  Sign In
                </Link>
                <Link className="btn mx-2 btn-sm border-none" to="/sign-up">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
