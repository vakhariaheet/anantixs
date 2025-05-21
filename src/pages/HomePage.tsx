import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;