import React from 'react'

const listing = () => {
  return (
    <div className="container mx-auto px-8 text-left mt-16">
      <h2 className="text-3xl header font-semibold mb-10">
        Create Your Listing
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className="ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none"'
          />
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className=" ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none"'
          />
        </div>
      </div>
      <h4 className="h4 text-lg flex">
        Job Description <p className="ml-2 text">*</p>
      </h4>
      <p className="h4 text-base my-4">
        Already have one written? Copy and paste from an existing job listing
        (on the web or from a Word or Google Doc).
      </p>
      <textarea className="border w-full rounded pt-2 pr-2 pb-2 pl-4 h-56 my-4" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className="ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none"'
          />
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className=" ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none"'
          />
        </div>
      </div>
    </div>
  );
}

export default listing