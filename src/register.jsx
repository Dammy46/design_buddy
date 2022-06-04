import React from 'react';
import './page.css'
const register = () => {
   const google = (
     <svg
       class="w-4 h-4 mr-2 -ml-1"
       aria-hidden="true"
       focusable="false"
       data-prefix="fab"
       data-icon="google"
       role="img"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 488 512"
     >
       <path
         fill="currentColor"
         d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
       ></path>
     </svg>
   );
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full
    "
    >
      <div className="hidden sm:block">
        <img
          src="https://images.unsplash.com/photo-1617035969033-a5c113b6f0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          className="w-full h-full object-cover"
          alt="register"
        />
      </div>
      <div className="flex flex-col justify-center">
        <form className="max-w-[405px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6 poppins">
            Create Your Account
          </h2>
          <p className="text-center py-2 font-semibold">
            Let DesignBuddy helps you getv the best opportunities that fits your
            roles
          </p>
          <button
            type="button"
            class="text-center font-semibold inline-flex items-center justify-center border w-full px-3 py-4 rounded"
          >
            {google}
            Continue with Google
          </button>
          <p className="font-semibold relative text-center my-5 before:bg-black before:absolute lg:before:w-40 md:before:w-40 before:w-36 before:h-px before:left-0 before:top-3 after:bg-black after:absolute lg:after:w-40 md:after:w-40 after:w-36 after:h-px after:right-0 after:top-3">
            Or
          </p>

          <input
            className="border p-2 w-full my-3 rounded focus:outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-2 w-full my-3 rounded focus:outline-none"
            type="Email"
            placeholder="Email"
          />
          <input
            className="border p-2 w-full my-3 rounded focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between items-baseline">
            <p className="flex items-center font-normal text-gray-400">
              Tick to get weekly products and graphics design jobs straight to
              your inbox
            </p>
            <input type="checkbox" />
          </div>

          <button className="border font-semibold rounded w-full my-5 py-2 bg-red-500 hover:bg-white hover:border-red-500 hover:text-black text-white">
            Sign Up
          </button>
          <p className="my-2 text-center">
            Already have an account?{' '}
            <span className="text-red-500 cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default register;
