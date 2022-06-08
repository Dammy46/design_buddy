import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './register';
import Sign from './sign';
import Home from './home';
import FAQs from './FAQs';
import Community from './Community';
import Post from './Post';
import Checkout from './checkout';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<Register />} />
      <Route path="signIn" element={<Sign />} />
      <Route path="home" element={<Home />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="community" element={<Community />} />
      <Route path="post" element={<Post />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
