import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
const pagination = ({ postsPerPage, totaljob }) => {
  const pageNumber = [];
  for (let index = 0; index <= Math.ceil(totaljob / postsPerPage); index++) {
    pageNumber.push(index);
  }
  return (
    <div className="bg-white px-4 py-12 flex items-center justify-between sm:px-6">
      <div className="flex-1 flex justify-around sm:hidden">
        <a
          href="index"
          className="relative inline-flex items-center px-4 py-2 btn-border text-sm font-medium rounded-md link bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="index"
          className="ml-3 relative inline-flex items-center px-4 py-2 btn-border text-sm font-medium rounded-md link bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <div>
          <nav className="relative z-0 inline-flex" aria-label="Pagination">
            <a
              href="index"
              className="relative inline-flex items-center p-1.5 rounded text-white  btn-border btn-bg  text-sm font-medium hover:btn-border hover:bg-white hover:text-black"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="index"
              aria-current="page"
              className="z-10 text btn-border rounded paragraph relative inline-flex items-center p-1.5 text-sm font-semibold mx-2.5"
            >
              1
            </a>
            <a
              href="index"
              className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5"
            >
              2
            </a>
            <a
              href="index"
              className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5"
            >
              3
            </a>
            <span className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5">
              ...
            </span>
            <a
              href="index"
              className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5"
            >
              8
            </a>
            <a
              href="index"
              className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5"
            >
              9
            </a>
            <a
              href="index"
              className="btn-border link rounded hover:text-red-500 relative inline-flex items-center p-1.5 border text-sm font-semibold mx-2.5"
            >
              10
            </a>
            <a
              href="index"
              className="relative inline-flex items-center p-1.5 rounded text-white  btn-border btn-bg  text-sm font-medium hover:btn-border hover:bg-white hover:text-black"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default pagination;
//  {
//    pageNumber.map((num) => (
//      <p href="#" key={num} className="">
//        {num}
//      </p>
//    ));
//  }
