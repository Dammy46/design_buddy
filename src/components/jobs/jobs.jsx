import React from 'react';
import Job from '../Job/job'
const Jobs = ({ jobs}) => {
  return (
    <div>
      {jobs.map((jb) => (
         <Job key={jb.id} eachJob={jb} />
      ))}
    </div>
  );
};

export default Jobs;
