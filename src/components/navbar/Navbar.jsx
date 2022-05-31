import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Btn from '../Button/button';
import './nav.css'
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Job', href: '#', current: false },
  { name: 'Get Hired', href: '#', current: false },
  { name: 'Community', href: '#', current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
const Navbar = () => {
  return (
    <Popover className=" w-full poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="index">
              <span className="sr-only">designbuddy</span>
              <img
                src="	https://res.cloudinary.com/dhkccnvyn/image/upload/v1647821187/design%20buddy/logo_keev1i.svg"
                alt="Workflow"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <div className="flex space-x-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-red-500'
                      : 'text-gray-400 hover:text-red-500',
                    'px-3 py-2 rounded-md text-base font-normal'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <Btn
                btnValue={'Post Job'}
                btnStyle={
                  'bg-red-500 p-4 font-normal border-none tracking-wide rounded-lg cursor-pointer ml-3 text-gray-50'
                }
              />
            </div>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute w-60 top-0 inset-x-0 transition transform origin-top-right md:hidden"
        >
          <div className=" h-screen shadow-lg ring-opacity-5 bg-red-500 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                {/* <div>
                  <img
                    src="	https://res.cloudinary.com/dhkccnvyn/image/upload/v1647821187/design%20buddy/logo_keev1i.svg"
                    alt="Workflow"
                  />
                </div> */}
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-2 justify-center">
                  {navigation.map((item) => (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-gray-700' : 'text-white',
                        'block px-3 py-2 rounded-md text-base text-center font-semibold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Btn
                    btnValue={'Post job'}
                    btnStyle={
                      'mt-5 border-2 border-white  font-medium rounded-md text-white py-3 px-5'
                    }
                  />
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
