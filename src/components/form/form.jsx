import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
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
  const [selected, setSelected] = useState(remote[3]);
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <div className="flex mt-20 lg:justify-between md:justify-between">
      <div className="border-2 border-slate-600 rounded-md lg:w-5/6 lg:mr-2.5 md:w-full  flex items-center">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button className="relative lg:w-48 w-32 bg-white border-none rounded-md lg:pl-3 pl-2 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate lg:text-xl text-base">
                      {selected.name}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {remote.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-red-500' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'ml-3 block truncate'
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-red-500' : 'text-gray-400',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
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
          'hidden lg:block md:block bg-red-500 lg:py-4 lg:px-4 w-48 md:44 px-3 py-4 font-sans tracking-wider text-base font-semibold border-2 border-red-500 uppercase tracking-wide rounded-lg cursor-pointer text-gray-50 transition ease-in-out hover:bg-white hover:text-black '
        }
      />
    </div>
  );
};

export default Search;
