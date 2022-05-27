import React from 'react';
import Job from '../Job/job'
import Banner from '../Banner/banner'
const Jobs = ({ arry }) => {
      const id = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      {arry.map((jb, index) => (
        <>
          {index === 5 && <Banner  key={id}/>}
          <Job key={jb.id} eachJob={jb} />
        </>
      ))}
    </div>
  );
};

export default Jobs;
