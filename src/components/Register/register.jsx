import React from 'react'
import './register.css'
const register = () => {
  return (
    <div className="container flex w-full -mx-4">
      <div className="flex w-screen justify-between">
        <div className="img w-2/4"></div>
        <div className="min-h-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 w-2/4">
          <div className="max-w-md  w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-5xl font-semibold text-gray-900">
                Create Your Account
              </h2>
              <p className="mt-2 text-center text-normal text-gray-600">
                Let DesignBuddy help you get the best opportunities that fits
                your role.
              </p>
            </div>
            <div className="mx-auto">
              <p className="text-center before:content-[''] after:content-[''] before:h-1 after:h-1 before:bg-black after:block after:bg-black before:block grid grid-cols-3 items-center gap-x-2 text-base">
                or
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none my-7 rounded-none block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-xl"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none my-7 rounded-none block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-xl"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none my-7 rounded-none block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-xl"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-normal">
                  <p className="font-medium">
                    Tick to get weekly productsand graphic design jobs straight
                    to your inbox.
                  </p>
                </div>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register