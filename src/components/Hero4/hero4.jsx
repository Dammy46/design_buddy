import React from 'react';
import Btn from '../Button/button';
const hero4 = ({ image }) => {
  return (
    <div className="container mx-auto px-8 ">
      <h1 className="header font-semibold lg:text-6xl text-4xl tracking-wider leading-normal text-center pt-16">
        Connect, learn and find jobs with Designbuddy
      </h1>
      <p className="my-6 paragraph text-lg text-center font-normal">
        Join 10000+ designers and gain access to our global community where you
        can find opportunities that you won’t find anywhere else.
      </p>
      <div className="text-center my-6">
        <Btn
          btnValue={'Join us on Slack'}
          btnStyle={
            'cursor-pointer text-white btn-bg btn-border py-2.5 px-5 rounded font-semibold mt-5'
          }
        />
        <img src={image} alt="" />
      </div>
      <h2 className="header text-2xl lg:text-4xl md:text-4xl font-bold">
        What’s Designbuddy Community Network?
      </h2>
      <p className="paragraph leading-6 text-base mt-5">
        Designbuddy Community Network is a dedicated, invite-only network of UX
        designers and researchers who discuss trends, give advice, share
        stories, uncover insights, surface opportunities, and connect in-person.
        As a UX practitioner, Designbuddy Community Network is your "secret
        weapon" to progressing your career and accomplishing your life goals.
        Together, we’re creating the World's most reliable brain trust for UX
        designers in a fast-paced age.
      </p>
    </div>
  );
};

export default hero4;
