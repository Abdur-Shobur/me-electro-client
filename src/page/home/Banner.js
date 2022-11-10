import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col py-40 lg:flex-row-reverse">
        <div className="flex-1">
          <img
            alt="im"
            src="https://as1.ftcdn.net/v2/jpg/02/25/35/42/1000_F_225354243_OsKPimqbPJaGEzZ0Mya4qszmAC87p584.jpg"
            className="rounded-lg shadow-2xl w-full "
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            I'm Electrician <span className="text-yellow-500">Engineer</span>
          </h1>
          <p className="py-6">
            I'm Provide Few of servies for you, And Solve issues your Electice
            System
          </p>
          <Link to="/services" className="btn btn-primary">
            See All Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
