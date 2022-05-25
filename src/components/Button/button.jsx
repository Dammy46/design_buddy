import React from 'react'

const button = ({btnValue, btnStyle}) => {
  return (
         <button className={btnStyle}>
     {btnValue}
     </button>


  );
}

export default button