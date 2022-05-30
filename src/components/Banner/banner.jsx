import React from 'react'
import Btn from '../Button/button'
const banner = () => {
  return (
    <div className="mt-12 flex justify-between items-center h-auto bg-cyan-900 pl-10 pr-8 lg:pr-24 md:pr-24 py-8 rounded-lg ">
      <div>
        <h3 className="text-white lg:text-4xl md:text-3xl text-xl mx-w-md font-semibold">
          Join Designbuddy And Get Hired
        </h3>
        <Btn
          btnValue={'Get Hired'}
          btnStyle={'px-5 py-2.5 my-5 text-white bg-red-500 font-normal rounded'}
        />
      </div>
      <div className='lg:block hidden'>
        <img
          src="	https://res.cloudinary.com/dhkccnvyn/image/upload/v1647821487/design%20buddy/hero_vm1t4o.svg"
              alt="buddy"
            
        />
      </div>
    </div>
  );
}

export default banner