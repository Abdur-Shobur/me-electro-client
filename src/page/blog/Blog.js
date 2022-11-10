import React from 'react'
import { Helmet } from 'react-helmet'
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Difference between SQL and NoSQL
                </h2>
                <p class="leading-relaxed">
                  SQL is the programming language used to interface with
                  relational databases. Relational databases model data as
                  records in rows and tables with logical links between them.
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  What is JWT, and how does it work?
                </h2>
                <p class="leading-relaxed">
                  JSON Web Token, is an open standard used to share security
                  information between two parties — a client and a server. Each
                  JWT contains encoded JSON objects, including a set of claims.
                  JWTs are signed using a cryptographic algorithm to ensure that
                  the claims cannot be altered after the token is issued.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  What is the difference between javascript and NodeJS?
                </h2>
                <p class="leading-relaxed">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  How does NodeJS handle multiple requests at the same time?
                </h2>
                <p class="leading-relaxed">
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
