import React from 'react';
const register = () => {
  const google = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className='w-5 h-5 mr-2 -ml-2'
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
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
          src="https://images.unsplash.com/photo-1621762782296-a131155befee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full object-cover"
          alt="register"
        />
      </div>
      <div className="flex flex-col justify-center">
        <form className="max-w-[405px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6 header">
            Welcome Back
          </h2>
          <p className="text-center pb-4 font-semibold">
            Login in to your account and start applying for jobs
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
            className="border p-4 w-full my-3 rounded focus:outline-none"
            type="Email"
            placeholder="Email"
          />
          <input
            className="border p-4 w-full my-3 rounded focus:outline-none"
            type="password"
            placeholder="Password"
          />

          <button className="font-semibold rounded w-full my-5 py-4 btn-bg hover:bg-white btn-border hover:text-black text-white">
            Sign Up
          </button>
          <p className="my-2 text-center">
            Don't have an account?{' '}
            <span className="text cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default register;
