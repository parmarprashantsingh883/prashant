import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Comp/Navbar";
import Footer from "./Comp/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Department from './pages/Department';
import Service from './pages/Service';
import Doctor from './pages/Doctor';

function App() {


  return (
    <>
      <Router>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Department' element={<Department/>}/>
          <Route path='/Service'element={< Service/>}/>
          <Route path='/Doctor' element={<Doctor/>}/>

        </Routes>
      
      <Footer />
    </Router>

    </>
  );
}

export default App;
