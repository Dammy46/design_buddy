import React from 'react';
import Btn from '../Button/button'
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
       <div className="flex p-4">
         <div className="flex items-center">
           <img
             src={eachJob.file}
             alt="avater"
             className={classNames(
               eachJob.active ? 'bg-white' : 'bg-current',
               'lg:w-24 md:w-28 w-24 lg:h-auto h-auto rounded '
             )}
           />
         </div>
         <div className="lg:ml-9 ml-5">
           <span className="lg:text-2xl md:text-2xl text-base">
             {eachJob.brand}
           </span>
           <h2 className="lg:text-3xl md:text-3xl text-xl my-2.5 text-neutral font-medium">
             {eachJob.job}
           </h2>
           <p className="lg:text-normal md:text-normal text-sm">
             {eachJob.time} • {eachJob.remote}
           </p>
         </div>
         <div
           className={classNames(eachJob.active ? 'ml-auto block' : 'hidden')}
         >
           <span className="uppercase text-green-600 lg:block md:block hidden font-medium">
             featured 🔥
           </span>
           <Btn
             btnValue={'Apply Now'}
             btnStyle={
               'px-5 py-2.5 my-5 text-white bg-white text-red-500 font-normal rounded lg:block md:block hidden'
             }
           />
         </div>
       </div>
     </div>
   );
};

export default job;
