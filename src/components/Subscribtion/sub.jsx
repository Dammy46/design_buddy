import React from 'react'

const sub = () => {
  return (
    <div className="container mx-auto lg:text-center mt-20 px-8">
      <h2 className="font-semibold text-xl lg:text-4xl md:text-3xl  text-slate-500">
        Subscribe to latest job openings
      </h2>
      <p className="my-1.5 text-current text-base font-light lg:font-normal">
        join our newsletter and receive the job openings of the week, right on
        your inbox.
      </p>
      <div className="mt-10 block lg:inline-flex md:inline-flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="text-sm py-4 px-2.5 border-2 border-slate-400 focus:outline-none lg:mr-0 md:mr-0 sm:w-48"
        />
        <input
          type="email"
          placeholder="Product Design"
          className="lg:block md:block hidden py-4 px-2.5 border-2 border-slate-400 focus:outline-none -ml-2.5 rounded-md"
        />
        <input
          type="Submit"
          value={'Subscribe'}
          placeholder="Product Design"
          className="lg:block md:block hidden text-sm py-4 px-12 border-2 bg-red-500 border-red-500 focus:outline-none -ml-2.5 rounded-md font-medium text-white cursor-pointer"
        />
      </div>
    </div>
  );
}

export default sub