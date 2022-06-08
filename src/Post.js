import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero5/hero5';
import Create from './components/Listing/listing'
import Footer from './components/Footer/footer';
const Post = () => {
  return (
     <div>
        <section>
           <Navbar />
           <Hero />
           <Create />
           <Footer />
        </section>
    </div>
  )
}

export default Post