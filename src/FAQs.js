import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero3/hero3'
import Questions from './components/Q.E/employers';
import Seekers from './components/Q.E/seekers';
import Footer from './components/Footer/footer';
const FAQs = () => {
   
  return (
     <div>
        <section>
           <Navbar />
           <Hero />
        </section>
        <section>
           <Questions />
           <Seekers />
        </section>
        <section>
         <Footer />
        </section>
    </div>
  )
}

export default FAQs