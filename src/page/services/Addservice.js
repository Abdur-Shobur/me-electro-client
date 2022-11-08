import React from 'react'

function Addservice() {
  const add_service = (e) => {
    e.preventDefault()
    const target = e.target
    const service_name = target.service_name.value
    const img = target.img.value
    const rating = target.rating.value
    const price = target.price.value
    const service_details = target.service_details.value
    const data = {
      service_name: service_name,
      img: img,
      rating: rating,
      price: price,
      service_details: service_details,
    }
    // update database
    // console.log(service_name, img, rating, price, service_details)
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .then((data) => console.log(data))
  }
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Add new Sevices
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Please add your favourite sevices
            </p>
          </div>

          <form
            onSubmit={add_service}
            className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="service_name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Name*
              </label>
              <input
                type="text"
                name="service_name"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="img"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Images url
              </label>
              <input
                name="img"
                type="text"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="rating"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Rating *
              </label>
              <input
                name="rating"
                type="number"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="price"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Price*
              </label>
              <input
                name="price"
                type="number"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="service_details"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Details*
              </label>
              <textarea
                name="service_details"
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Add Service
              </button>

              <span className="text-gray-500 text-sm">*Required</span>
            </div>
          </form>
          <p className="text-gray-400 text-xs">
            By signing up to our newsletter you agree to our{' '}
            <a
              href="h"
              className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Addservice
