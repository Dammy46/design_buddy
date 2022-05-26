import React from 'react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
const job = ({ eachJob }) => {
   return (
     <div
       className={classNames(
         eachJob.active
           ? 'bg-slate-900 text-white'
           : 'bg-red-100 text-neutral-500',
         'w-full items-center mt-12 rounded-lg'
       )}
     >
       <div className="flex py-6 px-7">
         <div className="flex items-center">
           <img
             src={eachJob.file}
             alt="avater"
             className="lg:w-36 md:w-28 w-24 lg:h-auto md:h-auto h-3/6 rounded bg-white"
           />
         </div>
         <div className="lg:ml-9 ml-5">
           <h4 className="lg:text-2xl md:text-2xl text-xl">{eachJob.brand}</h4>
           <h2 className="lg:text-3xl md:text-3xl text-2xl mt-5 text-neutral font-medium">
             {eachJob.job}
           </h2>
           <p className="text-normal mt-5 ">
             {eachJob.time} • {eachJob.remote}
           </p>
         </div>
       </div>
     </div>
   );
};

export default job;
