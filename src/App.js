import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero_section/hero';
import Section from './components/Section/section'
import Subscribe from './components/Subscribtion/sub'
// import { useState } from 'react';

export default function App() {
      const arryjobs  = [
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

    <div className='overflow-y-auto '>
      <Navbar btnValue={'nothing'} />
      <Hero />
      <Section jobs={arryjobs} />
      <Subscribe />
    </div>
  );
}
