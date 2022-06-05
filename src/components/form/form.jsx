import React from 'react';


import Btn from '../Button/button';
const Search = () => {
  const remote = [
    {
      id: 1,
      name: 'Remote ',
    },
    {
      id: 2,
      name: ' Cooper',
    },
    {
      id: 3,
      name: ' Mccoy',
    },
    {
      id: 4,
      name: ' Schultz',
    },
    {
      id: 5,
      name: ' Schaefer',
    },
    {
      id: 6,
      name: ' Smitham',
    },
  ];

  return (
    <div className="flex mt-20 lg:justify-between md:justify-between">
      <div className="border-2 border-slate-600 rounded-md lg:w-5/6 lg:mr-2.5 w-full  flex items-center">
        <select className="bg-white max-h-56 rounded-md py-1 px-2.5 overflow-auto focus:outline-none sm:text-sm w-auto lg:text-xl text-base ">
          {remote.map((opt) => (
            <option
              key={opt.id}
              
            >
              {opt.name}
            </option>
          ))}

        </select>
       
        <div className="border-r-2 border-slate-600 h-9"></div>
        <input
          type="text"
          name="price"
          id="price"
          className="focus:outline-none block w-full lg:pl-7 lg:pr-12  border-gray-300 rounded-md py-2.5 lg:text-xl text-base px-4"
          placeholder="Search by job title, company"
        />
      </div>
      <Btn
        btnValue={'Search'}
        btnStyle={
          'hidden lg:block btn-bg lg:py-4 lg:px-4 w-48 md:44 px-3 py-4 font-sans tracking-wider text-base font-semibold btn-border uppercase tracking-wide rounded-lg cursor-pointer text-gray-50 transition ease-in-out hover:bg-white hover:text-black '
        }
      />
    </div>
  );
};

export default Search;
