import React, { useState } from 'react';
import FormInput from './components/Input/input'
const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      errorMessage:
        "Name should be 5-16 characters and should't include any special character",

      required: true,

    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'should be a vaild email address',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include atleast 1 letter, 1 number and special characters',
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password do not match',
      pattern: values.password,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values);
   const google = (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       x="0px"
       y="0px"
       className="w-5 h-5 mr-2 -ml-2"
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
          src="https://images.unsplash.com/photo-1617035969033-a5c113b6f0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          className="w-full h-full object-cover"
          alt="register"
        />
      </div>
      <div className="flex flex-col justify-center">
        <form className="max-w-[405px] w-full mx-auto bg-white p-4">
          <h2 className="text-3xl font-bold text-center py-6 header">
            Create Your Account
          </h2>
          <p className="text-center py-2 font-semibold">
            Let DesignBuddy helps you get the best opportunities that fits your
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
          {inputs.map((input) => (
            <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <div className="flex justify-between items-baseline">
            <p className="flex items-center font-normal paragraph">
              Tick to get weekly products and graphics design jobs straight to
              your inbox
            </p>
            <input type="checkbox" />
          </div>

          <button className="font-semibold rounded w-full my-5 py-4 btn-bg hover:bg-white btn-border hover:text-black text-white">
            Sign Up
          </button>
          <p className="my-2 text-center">
            Already have an account?{' '}
            <span className="text cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
