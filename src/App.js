// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {


  const [mode, setMode] = useState('');//wheter dark mode is available
  const [mytext, setMytext] = useState('');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setMytext('Enable light mode');
      document.body.style.background = '#17223a';
      document.body.style.color = 'white';

    } else {
      setMode('light');
      setMytext('Enable Dark mode');
      document.body.style.background = 'white';
      document.body.style.color = '#17223a';
    }
  }



  return (
    <>
      {/* navbar */}
      {/* <Navbar title="MyNavbar" aboutText="MyAboutText" /> */}
      <Navbar searchTitle="Search Here" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm exampleLable="Enter the text to Check" />

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
