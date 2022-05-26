import React from 'react'

const button = ({btnValue, btnStyle, btnIcon}) => {
  return (
         <button className={btnStyle}>
      {btnValue}
      {btnIcon}
     </button>


  );
}

export default button