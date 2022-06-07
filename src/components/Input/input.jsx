import React, { useState } from 'react'
import './input.css'
const Input = (props) => {
   const [focused, setFocused] = useState(false);
   const handleFocus = (e) => {
      setFocused(true)
   }
   const {id, onChange, errorMessage, ...inputsProps} =  props
  return (
    <div>
      <input
        className="border p-4 w-full my-3 rounded focus:outline-none"
           {...inputsProps}
           onChange={onChange}
           onBlur={handleFocus}
           focused={focused.toString()}
        />
        <span className='text-red-700 p-1 text-xs hidden font-medium'>{errorMessage}</span>
    </div>
  );
}

export default Input