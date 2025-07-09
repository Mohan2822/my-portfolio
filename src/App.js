import React from 'react';
import About from './Components/About'; 
import Skills from './Components/Skills';
import Visionary from './Components/Visionary'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <About/>
      <Skills/>
      <Visionary/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
