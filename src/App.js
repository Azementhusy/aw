import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <div className="page-content bg-stone-100">

      <div className="mx-auto w-2/3">
        <Header />
      </div>

      <div className="mx-auto w-2/3">
        <About />
      </div>

      <div className="mx-auto w-2/3">
        <Education />
      </div>

      <div className="mx-auto w-2/3">
        <Skills />
      </div>

      <div className="mx-auto w-2/3">
        <Projects />
      </div>

      <div class="container footer-container">
      <p>Wenzheng Huang - Azementhusy@gmail.com</p>
      </div>

    </div>
  );
};

export default App;
