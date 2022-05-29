import React from 'react';

const footer = () => {
  return (
    <div className="container mx-auto px-8 pt-24 lg:flex lg:justify-around md:flex md:justify-between block ">
      <div className="lg:w-72 lg:block  lg:mb-0 mb-11 ">
        <a href="index">
          <img
            src="	https://the-design-buddy.netlify.app/assets/bottom.8038c058.svg"
            alt="logo"
            className="w-auto"
          />
        </a>
      </div>
      <ul className="mb-8">
        <h5 className="text-xl font-medium text-slate-900">Quick Link</h5>
        <li className="my-4 text-base font-light">
          <a href="index">About</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Help Center</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Term & Policy</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Privacy Policy</a>
        </li>
      </ul>
      <ul className="mb-8">
        <h5 className="text-xl font-medium text-slate-900">Services</h5>
        <li className="my-4 text-base font-light">
          <a href="index">Find Job</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Post a job</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Hire for your team</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Press</a>
        </li>
      </ul>
      <ul className="mb-8">
        <h5 className="text-xl font-medium text-slate-900">Quick Link</h5>
        <li className="my-4 text-base font-light">
          <a href="index">Twitter</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Linkedin</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Facebook</a>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
