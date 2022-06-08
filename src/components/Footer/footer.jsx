import React from 'react';
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <div className="container mx-auto px-8 py-24 lg:flex lg:justify-around md:flex md:justify-between block lg:text-left md:text-left text-center">
      <div className="lg:w-72 lg:block  lg:mb-0 mb-11 ">
        <a href="index" className="flex justify-center">
          <img
            src="	https://the-design-buddy.netlify.app/assets/bottom.8038c058.svg"
            alt="logo"
            className="w-auto"
          />
        </a>
      </div>
      <ul className="mb-8">
        <h5 className="text-xl font-semibold link">Quick Link</h5>
        <li className="my-4 text-base font-light">
          <Link to="/register">Register</Link>
        </li>
        <li className="my-4 text-base font-light">
          <Link to="/signin">Sign in</Link>
        </li>
        <li className="my-4 text-base font-light">
          <Link to="/home">Home</Link>
        </li>
        <li className="my-4 text-base font-light">
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
      <ul className="mb-8">
        <h5 className="text-xl font-semibold link">Services</h5>
        <li className="my-4 text-base font-light">
          <Link to="/community">Community</Link>
        </li>
        <li className="my-4 text-base font-light">
          <Link to="/post">Post a job</Link>
        </li>
        <li className="my-4 text-base font-light">
          <Link to="/checkout">Checkout</Link>
        </li>
        <li className="my-4 text-base font-light">
          <a href="index">Press</a>
        </li>
      </ul>
      <ul className="mb-8">
        <h5 className="text-xl font-semibold link">Quick Link</h5>
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
