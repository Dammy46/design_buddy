import React from 'react';

const footer = () => {
  return (
    <div className="container mx-auto px-8 pt-24 lg:flex lg:justify-around md:flex md:justify-between block">
      <div className="w-72 lg:block hidden ">
        <a href="index">
          <img
            src="	https://the-design-buddy.netlify.app/assets/bottom.8038c058.svg"
            alt="logo"
            className="w-auto"
          />
        </a>
      </div>
      <ul className="mb-4">
        <h5 className="text-xl font-medium text-slate-900">Quick Link</h5>
        <li className="my-5 text-base">
          <a href="index">About</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Help Center</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Term & Policy</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Privacy Policy</a>
        </li>
      </ul>
      <ul className="mb-4">
        <h5 className="text-xl font-medium text-slate-900">Services</h5>
        <li className="my-5 text-base">
          <a href="index">Find Job</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Post a job</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Hire for your team</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Press</a>
        </li>
      </ul>
      <ul className="mb-4">
        <h5 className="text-xl font-medium text-slate-900">Quick Link</h5>
        <li className="my-5 text-base">
          <a href="index">Twitter</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Linkedin</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Facebook</a>
        </li>
        <li className="my-5 text-base">
          <a href="index">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
