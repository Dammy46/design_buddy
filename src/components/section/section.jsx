import React from 'react'
import Btn from '../Button/button'
import {FilterIcon} from '@heroicons/react/outline'
import Jobs from '../jobs/jobs'
const section = ({jobs}) => {
   const icon = <FilterIcon className='w-4 h-4'/>
  return (
    <section>
      <div className="container mx-auto px-8 mt-20">
        <div className="flex justify-between content-center items-center">
          <h2 className="text-xl font-bold">Recent Jobs</h2>
          <Btn
            btnValue={'filter'}
            btnStyle={
              'lg:py-4 lg:px-8 px-4 py-3 font-sans font-normal border-teal-900 border-4 uppercase tracking-wider rounded-lg cursor-pointer text-teal-900 flex inline-flex items-center justify-around lg:w-44 lg:text-xl text-base w-32 lg:inline-flex hidden'
            }
            btnIcon={icon}
          />
        </div>
        <Jobs arry={jobs} />
      </div>
    </section>
  );
   
}

export default section