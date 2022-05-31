import React from 'react'
import Btn from '../Button/button'

import Jobs from '../jobs/jobs'
const section = ({jobs}) => {
   const icon = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7H21.5" stroke="#0F4354" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.5 12H18.5" stroke="#0F4354" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5 17H14.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
  </svg> 

  return (
    <section>
      <div className="container mx-auto px-8 mt-20">
        <div className="flex justify-between content-center items-center">
          <h2 className="text-xl font-bold">Recent Jobs</h2>
          <Btn
            btnValue={'filter'}
            btnStyle={
              'lg:py-4 lg:px-8 px-4 py-3 font-sans font-semibold border-teal-900 border-2 uppercase tracking-wider rounded-lg cursor-pointer text-teal-900 flex inline-flex items-center justify-around lg:w-44 lg:text-xl text-base w-32 lg:inline-flex hidden'
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
