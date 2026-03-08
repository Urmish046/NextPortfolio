import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <main>
       <Hero />
      
       <About/>
        <Services/>
       <Work/>
       <Skills/>
       <Contact/>
       <Footer/>

    </main>
  );
};

export default Home;