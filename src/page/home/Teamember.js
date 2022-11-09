import React from 'react'

function Teamember() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div class="mb-8 md:mb-12">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our Team by the numbers
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8">
            <div class="flex flex-col items-center">
              <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                200
              </div>
              <div class="text-indigo-200 text-sm sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                500+
              </div>
              <div class="text-indigo-200 text-sm sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                1000+
              </div>
              <div class="text-indigo-200 text-sm sm:text-base">Customers</div>
            </div>

            <div class="flex flex-col items-center">
              <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                A couple
              </div>
              <div class="text-indigo-200 text-sm sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamember
