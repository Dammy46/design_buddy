import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero2/hero2';
import Section from './components/section/section';
import Btn from './components/Button/button';
import Subscrition from './components/Subscribtion/sub'
import Footer from './components/Footer/footer';
const home = () => {
      const arryjobs = [
        {
          id: 1,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',
          remote: 'Remote',
          active: true,
        },
        {
          id: 2,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: true,
        },
        {
          id: 3,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: true,
        },
        {
          id: 4,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
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
          file: 'https://i.stack.imgur.com/UEvOq.png=',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 9,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 10,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
      ];
  return (
    <div>
      <section className="h-screen">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Section jobs={arryjobs} />
        <div className="container items-center text-center mt-20">
          <Btn
            btnValue={'Load all jobs'}
            btnStyle={
              'cursor-pointer text-white btn-bg btn-border py-2.5 px-5 rounded font-semibold '
            }
          />
        </div>
      </section>
      <section>
        <Subscrition />
      </section>
      <section>
          <Footer />
      </section>
    </div>
  );
}
export default home;