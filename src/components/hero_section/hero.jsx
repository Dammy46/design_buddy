import React from 'react'
import Btn from '../Button/button'
import Search from '../form/form'
const hero = () => {
  return (
    <div className="container lg:text-center mx-auto px-8 sm:px-6 md:text-left text-left">
      <h1 className="lg:text-7xl lg:leading-tight pt-24  text-4xl">
        Start hiring the best Design Talent
      </h1>
      <p className="mt-5 text-xl text-gray-400 leading-7 font-sans">
        Find remote design opportunities on DesignBuddy. We select and deliver
        verified high-paying UI/UX design jobs, products design jobs, graphic
        design jobs & UX research jobs across thge world
      </p>
      <div className="flex items-center lg:justify-center mt-10">
        <Btn
          btnValue={'post a job'}
          btnStyle={
            'bg-red-500 lg:py-4 lg:px-10 md:py-4 md:px-10 px-3 py-4 tracking-wider text-base font-normal border-2 border-red-500 uppercase tracking-wide rounded-lg cursor-pointer sm:mr-3 mr-3 text-gray-50 transition ease-in-out hover:bg-white hover:text-black'
          }
        />
        <Btn
          btnValue={'Get a Job'}
          btnStyle={
            'lg:py-4 lg:px-10 md:py-4 md:px-10 px-3 py-4 text-base font-normal border-teal-900 border-2 uppercase tracking-wide rounded-lg cursor-pointer text-teal-900   transition ease-in-out hover:bg-teal-900 hover:text-white'
          }
        />
      </div>
      <Search />
    </div>
  );
}

export default hero
