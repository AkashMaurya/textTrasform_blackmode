// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* navbar */}
      {/* <Navbar title="MyNavbar" aboutText="MyAboutText" /> */}
      <Navbar searchTitle="Search Here " />


      <div className="container">
        <TextForm exampleLable="Enter the text to Check" />

      </div>

    </>
  );
}

export default App;
