import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero5/hero5';
import Create from './components/Listing/listing'
// import Questions from './components/Q.E/employers';
// import Subscrition from './components/Subscribtion/sub';
// import Footer from './components/Footer/footer';
const Post = () => {
  return (
     <div>
        <section>
           <Navbar />
           <Hero />
           <Create />
        </section>
    </div>
  )
}

export default Post