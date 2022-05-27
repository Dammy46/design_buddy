import React from 'react'
import Btn from '../Button/button'
import Search from '../form/form'
const hero = () => {
  return (
    <div className="container lg:text-center mx-auto px-8 sm:px-6 md:text-left text-left">
      <h1 className="lg:text-7xl lg:leading-tight mt-16 sm:text-3xl text-3xl">
        Start hiring the best Design Talent
      </h1>
      <p className="mt-5 text-xl text-gray-400 leading-7 font-sans">
        Find remote design opportunities on DesignBuddy. We select and deliver
        verified high-paying UI/UX design jobs, products design jobs, graphic
        design jobs & UX research jobs across thge world
      </p>
      <div className="flex items-center lg:justify-center mt-5">
        <Btn
          btnValue={'post a job'}
          btnStyle={
            'bg-red-500 lg:py-3 lg:px-4 px-2 py-2.5 font-sans tracking-wider text-base font-normal border-4 border-red-500 uppercase tracking-wide rounded-lg cursor-pointer sm:mr-3 mr-7 text-gray-50'
          }
        />
        <Btn
          btnValue={'Get a Job'}
          btnStyle={
            'lg:py-3 lg:px-4 px-2 py-2.5 font-sans text-base font-semibold border-teal-900 border-4 uppercase tracking-wide rounded-lg cursor-pointer text-teal-900'
          }
        />
      </div>
      <Search />
    </div>
  );
}

export default hero