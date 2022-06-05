import React from 'react'
import Btn from '../Button/button'
const hero2 = () => {
  return (
    <div className="container mx-auto px-8 flex pt-28">
      <div>
        <h2 className="lg:text-5xl md:text-5xl text-3xl font-semibold header">
          Start hiring the best Design Talent.
        </h2>
        <p className="paragraph mt-5">
          Find remote Design opportunities on DesignBuddy. we select and deliver
          verified high-paying UI/UX design jobs, product design jobs, graphics
          design jobs & UI research jobs across the world.
        </p>
        <div className="mt-3">
          <Btn
            btnValue={'Post a job'}
            btnStyle={
              'cursor-pointer text-white btn-bg btn-border hover:bg-white hover:text-black py-2.5 px-5 rounded font-semibold transition ease-in-out '
            }
          />
          <Btn
            btnValue={'Get Hired'}
            btnStyle={
              'cursor-pointer btn2-color border-2 border-teal-900 hover:text-white hover:bg-teal-900 py-2.5 px-5 rounded font-semibold ml-5 transition ease-in-out '
            }
          />
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <img
          src="	https://the-design-buddy.netlify.app/assets/Talents.40c79ca4.png
"
          alt=""
        />
      </div>
    </div>
  );
}

export default hero2