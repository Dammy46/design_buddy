import React from 'react';
import Btn from '../Button/button';
const hero2 = () => {
  return (
    <div className="container mx-auto px-8 flex pt-28">
      <div>
        <h2 className="lg:text-5xl md:text-5xl text-3xl font-semibold header">
          Frequently Asked Question.
        </h2>
        <p className="paragraph mt-5">
          Go through some of the frequently asked questions about DesignBuddy by
          Employers and our answers. Find out what you gain when you pay for a
          design job listing on DesignBuddy.
        </p>
        <div className="mt-3">
          <Btn
            btnValue={'Chat with us'}
            btnStyle={
              'cursor-pointer text-white btn-bg btn-border hover:bg-white hover:text-black py-2.5 px-5 rounded font-semibold transition ease-in-out '
            }
          />
        </div>
      </div>
      <div className="w-full hidden lg:block">
        <img
          src="	https://actisense.com/wp-content/uploads/2021/12/Flat-Illustration1x.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default hero2;
