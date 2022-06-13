// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* navbar */}
      {/* <Navbar title="MyNavbar" aboutText="MyAboutText" /> */}
      <Navbar searchTitle="Search Here " />


      <div className="container my-3">
        <TextForm exampleLable="Enter the text to Check" />

        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
