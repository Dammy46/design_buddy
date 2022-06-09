import React from 'react';
import Btn from '../Button/button';
const Details = () => {
     const relatedJob = [
       {
         id: 5,
         file: 'https://i.stack.imgur.com/UEvOq.png',
         brand: 'Spotify',
         job: 'UI/UX Designer',
         time: 'Fulltime',

         remote: 'Remote',
         active: false,
       },
       {
         id: 6,
         file: 'https://i.stack.imgur.com/UEvOq.png',
         brand: 'Spotify',
         job: 'UI/UX Designer',
         time: 'Fulltime',
         remote: 'Remote',
         active: false,
       },
       {
         id: 7,
         file: 'https://i.stack.imgur.com/UEvOq.png',
         brand: 'Spotify',
         job: 'UI/UX Designer',
         time: 'Fulltime',

         remote: 'Remote',
         active: false,
       },
       {
         id: 8,
         file: 'https://i.stack.imgur.com/UEvOq.png',
         brand: 'Spotify',
         job: 'UI/UX Designer',
         time: 'Fulltime',

         remote: 'Remote',
         active: false,
       },
     ];
   const classNames = (...classes) => {
     return classes.filter(Boolean).join(' ');
   };
  return (
    <div className="container mx-auto px-8 mt-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-x-4">
        <div className="lg:col-span-2 md:col-span-2 mb-10 lg:mb-0 md:mb-0">
          <h4 className="h4 mb-5">Job Details</h4>
          <h2 className="header font-semibold mb-8 text-4xl">
            Senior Product Designer
          </h2>
          <p className="h4 text-base font-normal mb-6">
            <span>
              Tantrum Studio is looking for freelance character designers to
              work with us on a variety of projects. Are you wildly imaginative
              with a keen sense of how to create characters that come alive with
              personality? We wanna talk to you!
            </span>
          </p>
          <h4 className="h4 mb-6 font-mdeium">Responsibilities:</h4>
          <ul className="pb-5 list-disc pl-6">
            <li className="paragraph">
              Creating character from rough concepts through the finished
              turnaround and character expression/pose sheets
            </li>
            <li className="paragraph">
              Working closly with the Closing Director and project leads to
              develop visual ideas and establish the look and feel of a project,
              including designing supporting props/environment.
            </li>
          </ul>
          <h4 className="h4 mb-6 font-mdeium">Requirements:</h4>
          <ul className="pb-5 list-disc pl-6">
            <li className="paragraph">Excellent drawing and design skills</li>
            <li className="paragraph">
              Intuitive sense of how to bring personality to a character and
              generate innovative concepts in a wide variety of aesethetic
              areas.
            </li>
            <li className="paragraph">
              Ability to productively discuss, make decisions, and communicate
              ideas.
            </li>
            <li className="paragraph">
              Additional 3D skills or an understanding of 3D production pipeline
              are an assets but not required.
            </li>
          </ul>
          <h4 className="h4 mb-6 font-mdeium">Application Details:</h4>
          <p className="paragraph">
            Drop us a line to say hello and share your portfolio at
            jobs@tantrum.studio Positions are available for remote work, but
            time-zone friendly candidates are preferred.
          </p>
          <Btn
            btnValue={'Apply'}
            btnStyle={
              'cursor-pointer text-white btn-bg btn-border py-2.5 px-8 rounded font-semibold mt-14'
            }
          />
        </div>

        <div className="">
          <div className="border px-5 py-6 rounded mb-10">
            <div className="flex flex-col items-center">
              <h4 className="header text-2xl text-center font-semibold">
                Company Name
              </h4>
              <p className="text my-5">
                <a href="index">Visit Website</a>
              </p>
              <Btn
                btnValue={'Apply'}
                btnStyle={
                  'cursor-pointer text-white btn-bg btn-border py-2.5 px-8 rounded font-semibold mb-5'
                }
              />
            </div>
            <div className="border"></div>
            <h4 className="font-semibold mt-2">Job Type</h4>
            <p className="paragraph my-3">Freelancer</p>
            <h4 className="font-semibold mt-2">Location</h4>
            <p className="paragraph my-3">Anywhere</p>
            <h4 className="font-semibold mt-2">Date Posted</h4>
            <p className="paragraph my-3">30th June, 2022</p>
          </div>
          <div className="w-full h-1/3 flex justify-center items-center btn-bg text-white font-semibold">
            Advertisement
          </div>
        </div>
      </div>
      <div className="mt-60 lg:mt-16 md:mt-16">
        <h4 className="font-semibold text-2xl">Related Listed Jobs</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-x-40 md:gap-x-10">
          {relatedJob.map((related) => (
            <div
              key={related.id}
              className={classNames(
                related.active
                  ? 'bg-slate-900 text-white'
                  : 'bg-red-100 text-neutral-500',
                'w-full items-center mt-12 rounded-lg'
              )}
            >
              <div className="flex p-4">
                <div className="flex items-center">
                  <img
                    src={related.file}
                    alt="avater"
                    className={classNames(
                      related.active ? 'bg-white' : 'bg-current',
                      'lg:w-24 md:w-28 w-24 lg:h-auto h-auto rounded '
                    )}
                  />
                </div>
                <div className="lg:ml-9 ml-5">
                  <span
                    className={classNames(
                      related.active ? 'text-white' : 'text-gray-500',
                      'lg:text-2xl md:text-2xl text-base font-normal'
                    )}
                  >
                    {related.brand}
                  </span>
                  <h2
                    className={classNames(
                      related.active ? 'text-white' : 'text-gray-700',
                      'lg:text-3xl md:text-xl text-xl my-2.5 text-neutral font-semibold'
                    )}
                  >
                    {related.job}
                  </h2>
                  <p className="lg:text-normal md:text-normal text-sm">
                    {related.time} • {related.remote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
