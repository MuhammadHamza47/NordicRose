import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import WhatNext from './Components/WhatNext/WhatNext';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <WhatNext/>
      <SignUp/>
      <Footer/>
    </>
  );
}

export default App;
