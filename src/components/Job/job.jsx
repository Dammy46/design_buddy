import React from 'react';

//    const check = (classes) => {
//   return classes.filter(Boolean)
// }
const job = ({ eachJob }) => {
  return (
    <div className="w-full items-center mt-20 bg-slate-600 rounded">
      <img src={eachJob.file} alt="avater" className="w-3-6 h-auto" />
      <div className="text-left space-x-5">
        <h4 className="text-base text-white">{eachJob.brand}</h4>
        <h2 className="text-xl text-white">{eachJob.job}</h2>
        <p className="text-normal text-white">
          {eachJob.time}•{eachJob.remote}
        </p>
      </div>
    </div>
  );
};

export default job;
