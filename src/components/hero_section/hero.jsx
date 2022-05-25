import React from 'react'
import Btn from '../Button/button'
const hero = () => {
  return (
    <div className="container lg:text-center mx-auto px-8 sm:px-6 md:text-left text-left">
      <h1 className="lg:text-8xl leading-tight mt-16 font-sans sm:text-3xl text-3xl">
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
            'bg-red-500 lg:py-4 lg:px-8 px-4 py-4 font-sans tracking-wider text-lg font-semibold border-none uppercase tracking-wide rounded-lg cursor-pointer mr-9 text-gray-50'
          }
        />
        <Btn
          btnValue={'Get a Job'}
          btnStyle={
            'lg:py-4 lg:px-8 px-4 py-4 font-sans text-lg font-semibold border-teal-900 border-4 uppercase tracking-wide rounded-lg cursor-pointer text-teal-900'
          }
        />
      </div>
    </div>
  );
}

export default hero