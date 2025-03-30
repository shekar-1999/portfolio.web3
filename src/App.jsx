import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className="relative w-full h-screen  ">
      {/* Background Video - Covers Entire Page
      <video 
        autoPlay 
        loop 
        muted 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="./Lbg.mp4" type="video/mp4" />
      </video> */}

      {/* Main Content */}
      <Home />


    </div>
  );
};

export default App;
