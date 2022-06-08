import React from 'react'
import Btn from '../Button/button';
const listing = () => {
  return (
    <div className="container mx-auto px-8 text-left mt-16">
      <h2 className="text-3xl header lg:font-semibold  mb-10">
        Create Your Listing
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className="ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none'
          />
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Job Title <p className=" ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className='border p-4 w-full my-3 rounded focus:outline-none'
          />
        </div>
      </div>
      <h4 className="h4 text-lg flex">
        Job Description <p className="ml-2 text">*</p>
      </h4>
      <p className="h4 text-base my-4">
        Already have one written? Copy and paste from an existing job listing on
        the web or from a Word or Google Doc).
      </p>
      <textarea className="border w-full rounded pt-2 pr-2 pb-2 pl-4 h-56 my-4" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Job Location <p className="ml-2 text">*</p>
          </h4>
          <select className="border p-4 w-full my-3 rounded focus:outline-none appearance-none">
            <option className="paragraph" defaultValue={''} disabled selected>
              Choose a Country *
            </option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            ...
          </select>
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Job Categories <p className=" ml-2 text">*</p>
          </h4>
          <input
            type="text"
            className="border p-4 w-full my-3 rounded focus:outline-none"
            placeholder="Category *"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Experience <p className="ml-2 text">*</p>
          </h4>
          <select className="border p-4 w-full my-3 rounded focus:outline-none appearance-none">
            <option className="paragraph" defaultValue={''} disabled selected>
              Choose experience *
            </option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            ...
          </select>
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Job Type <p className=" ml-2 text">*</p>
          </h4>
          <select className="border p-4 w-full my-3 rounded focus:outline-none appearance-none">
            <option className="paragraph" defaultValue={''} disabled selected>
              Select job type *
            </option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            ...
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <h4 className="h4 text-lg flex">
            Company URL <p className="ml-2 text">*</p>
          </h4>
          <input
            type="url"
            className="border p-4 w-full my-3 rounded focus:outline-none"
            placeholder="https://www.example.com"
          />
        </div>
        <div>
          <h4 className="h4 text-lg flex">
            Link to Apply <p className=" ml-2 text">*</p>
          </h4>
          <input
            type="url"
            className="border p-4 w-full my-3 rounded focus:outline-none"
          />
          <p className="paragraph">
            This is where people go to apply for your job.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-20 mb-7">
        <div>
          <Btn
            btnValue={'Post a Job'}
            btnStyle={
              'cursor-pointer text-white btn-bg btn-border py-2.5 px-5 rounded font-semibold'
            }
          />
        </div>

        <p className="paragraph mt-5 lg:mt-0 md:mt-0">
          Hey! We would let you know as soon as your job listing is successful
          via email. Keep an eye in your mailbox. 😀
        </p>
      </div>
    </div>
  );
}

export default listing