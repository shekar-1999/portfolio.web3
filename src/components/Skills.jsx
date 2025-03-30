import React from 'react';
import Skills1 from './pages/Skills1';
import Skills2 from './pages/Skills2';
import Otherskills from './pages/Otherskills';

const Skills = () => {
  return (
    <div id="skills" className=" border border-amber-700 overflow-x-hidden">
      <h1 className='p-6 text-3xl '>My Skills</h1>
      <Skills1 />
      <Skills2 />
      <Otherskills />
    </div>
  );
};

export default Skills;
