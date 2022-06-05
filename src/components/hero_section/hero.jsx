import React from 'react'
import Btn from '../Button/button'
import Search from '../form/form'
const hero = () => {
  return (
    <div className="container lg:text-center mx-auto px-8 sm:px-6 md:text-left text-left">
      <h1 className="lg:text-7xl lg:leading-tight pt-16 header text-4xl font-semibold">
        Start hiring the best Design Talent
      </h1>
      <p className="mt-5 text-xl paragraph leading-7 font-sans">
        Find remote design opportunities on Designbuddy. We select and deliver
        verified high-paying UI/UX design jobs, product design jobs, graphic
        design jobs & UX research jobs across the world.
      </p>
      <div className="flex items-center lg:justify-center mt-10">
        <Btn
          btnValue={'Post a Job'}
          btnStyle={
            'btn-bg lg:py-4 lg:px-10 md:py-4 md:px-10 px-3 py-3.5 tracking-wider text-base font-semibold btn-border tracking-wide rounded-lg cursor-pointer  mr-1.5 text-gray-50 transition ease-in-out hover:bg-white hover:text-black'
          }
        />
        <Btn
          btnValue={'Get Hired'}
          btnStyle={
            'lg:py-4 lg:px-10 md:py-4 md:px-10 px-3 py-3.5 text-base font-semibold border-teal-900 border-2 tracking-wide rounded-lg cursor-pointer text-teal-900   transition ease-in-out hover:bg-teal-900 hover:text-white'
          }
        />
      </div>
      <Search />
    </div>
  );
}

export default hero
