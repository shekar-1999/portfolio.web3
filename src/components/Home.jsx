import React from 'react';
import Navbar from './fixed/Navbar';
import Landingpage from './pages/Landingpage';
import Skills from './Skills';
import Education from './pages/Education';
import MyWork from './pages/MyWork';
import Resume from './pages/Resume';
import Footer from './fixed/Footer';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';


const Home = () => {
  return (
    <>
    <div id="home" className=" overflow-x-hidden">

      <Navbar />
      <Landingpage />
      <Skills />
      <Education />
      <MyWork />
      <Certificates />
      <Resume />
      <Contact />
      <Footer />
      
      </div>

    </>
  );
}

export default Home;
