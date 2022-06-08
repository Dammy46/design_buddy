import React, { useState } from 'react';

const Accordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-item my-6">
        <div className="accordion-title flex justify-between" onClick={() => setIsActive(!isActive)}>
          <div className='text-xl acc font-semibold'>{title}</div>
          <div className='text-base'>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content mt-4 paragraph">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
