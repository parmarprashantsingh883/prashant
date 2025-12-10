
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
       <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
