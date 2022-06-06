import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero4/hero4';
import img from './assets/community.png';
import Offers from './components/Offer/offer';
import Subscrition from './components/Subscribtion/sub';
import Footer from './components/Footer/footer';
const Community = () => {
  return (
    <div>
        <section>
           <Navbar />
           <Hero image={img}/>
      </section>
      <section>
        <Offers />
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

export default Community