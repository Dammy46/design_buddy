import React from 'react';
import Job from '../Job/job'
const Jobs = ({ arry}) => {
  return (
    <div>
      {arry.map((jb) => (
         <Job key={jb.id} eachJob={jb} />
      ))}
    </div>
  );
};

export default Jobs;
