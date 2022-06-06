import React from 'react'

const offer = () => {
  return (
    <div className="container mx-auto px-8 my-16">
      <h2 className="header font-bold text-2xl lg:text-4xl md:text-4xl text-center">
        What we offer
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-8 mt-8">
        <div className="block sm:mb-0 mb-16 lg:p-8 md:p-8">
          <div className="rounded-full btn-bg w-16 p-2.5">
            <img
              src="https://icon-library.com/images/cursor-icon-png/cursor-icon-png-15.jpg"
              alt=""
            />
          </div>
          <h4 className="h4 font-bold text-2xl mb-2.5 mt-8">Jobs</h4>
          <p className="paragraph ">
            Explore thousands of remote job opportunities in design across the
            world.
          </p>
        </div>
        <div className="block sm:mb-0 mb-16 lg:p-8 md:p-8">
          <div className="rounded-full btn-bg w-16 p-2.5">
            <img
              src="https://icon-library.com/images/cursor-icon-png/cursor-icon-png-15.jpg"
              alt=""
            />
          </div>
          <h4 className="h4 font-bold text-2xl mb-2.5 mt-8">
            Portfolio design & reviews
          </h4>
          <p className="paragraph ">
            Get your portfolio designed or reviewed by experienced designers in
            the industry.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-8">
        <div className="block sm:mb-0 mb-16 lg:p-8 md:p-8">
          <div className="rounded-full btn-bg w-16 p-2.5">
            <img
              src="https://icon-library.com/images/cursor-icon-png/cursor-icon-png-15.jpg"
              alt=""
            />
          </div>
          <h4 className="h4 font-bold text-2xl mb-2.5 mt-8">Resume design</h4>
          <p className="paragraph ">
            Get your resume designed by experienced designers and land your
            dream job easily.
          </p>
        </div>
        <div className="block sm:mb-0 mb-16 lg:p-8 md:p-8">
          <div className="rounded-full btn-bg w-16 p-2.5">
            <img
              src="https://icon-library.com/images/cursor-icon-png/cursor-icon-png-15.jpg"
              alt=""
            />
          </div>
          <h4 className="h4 font-bold text-2xl mb-2.5 mt-8">Mentorship</h4>
          <p className="paragraph ">
            Get connected with a mentor that will help you pave your career
            path.
          </p>
        </div>
      </div>
    </div>
  );
}

export default offer