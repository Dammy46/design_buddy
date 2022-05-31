import React from 'react'
const sub = () => {
  return (
    <div className="container mx-auto lg:text-center mt-20 px-8">
      <h2 className="font-semibold text-xl lg:text-4xl md:text-3xl  text">
        Subscribe to latest job openings
      </h2>
      <p className="my-2 text-current text-xl font-light lg:font-normal">
        join our newsletter and receive the job openings of the week, right on
        your inbox.
      </p>
      <div className="mt-10 block lg:inline-flex md:inline-flex text-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="text-sm py-4 px-2.5 border-2 border-slate-400 focus:outline-none lg:mr-0 md:mr-0 sm:w-48"
        />
        <input
          type="email"
          placeholder="Product Design"
          className="text-sm lg:block md:block my-4 lg:my-0 md:my-0 py-4 px-2.5 border-2 border-slate-400 focus:outline-none lg:-ml-2.5 md:-ml-2.5 -ml-0  lg:rounded-md md:rounded-md rounded-none"
        />
        <input
          type="Submit"
          defaultValue={'Subscribe'}
          placeholder="Product Design"
          className="lg:block md:block  text-sm lg:py-4 lg:px-12 md:py-4 md:px-12 border-2 py-4 px-8 bg-red-500 border-red-500 focus:outline-none lg:-ml-2.5 md:-ml-2.5 -ml-6 rounded-md font-medium text-white cursor-pointe transition ease-in-out hover:bg-white hover:text-black"
        />
      </div>
    </div>
  );
}

export default sub