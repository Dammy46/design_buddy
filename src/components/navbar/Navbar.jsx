import React from 'react';
import { Disclosure } from '@headlessui/react';
import {  MenuIcon, XIcon } from '@heroicons/react/outline';
import Btn from '../Button/button';

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
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="container mx-auto mt-0 mb-0 sm:px-6 lg:px-8 px-8">
            <div className="relative flex justify-between h-20 items-center">
              <div className="absolute inset-y-0 right-0 flex sm:hidden z-50">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center  justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <img
                src="	https://res.cloudinary.com/dhkccnvyn/image/upload/v1647821187/design%20buddy/logo_keev1i.svg"
                alt="Workflow"
              />

              <div className="flex items-center content-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-red-500'
                            : 'text-gray-800 hover:text-red-500',
                          'px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Btn
                      btnValue={'post jobs'}
                      btnStyle={
                        'bg-red-500 p-4 font-normal border-none uppercase tracking-wide rounded-lg cursor-pointer ml-3 text-gray-50'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden lg:absolute top-0 right-0 bg-red-500 z-40 transition w-52 h-screen fixed">
            <div className="px-2 pt-2 pb-3 mt-40 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-slate-600' : 'text-white',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Btn btnValue={'Post job'} btnStyle={'mt-5 border-2 border-white uppercase font-medium rounded-md text-white py-3 px-5'} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
