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
    <div class="page-content">

      <div class="container header-container">
        <Header />
      </div>

      <div class="container">
        <About />
      </div>

      <div class="container">
        <Education />
      </div>

      <div class="container">
        <Skills />
      </div>

      <div class="container">
        <Projects />
      </div>

      <div class="container footer-container">
      <p>Wenzheng Huang - Azementhusy@gmail.com</p>
      </div>

    </div>
  );
};

export default App;
