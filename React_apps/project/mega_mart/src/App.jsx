import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Categories from './Categories'
import Home from './pages/Home'
import Product from './pages/Product'
import Offers from './pages/Offers';
// import AdminDashboard from "./admin/AdminDashboard";
import About from './pages/About';
 import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/offers' element={<Offers />} />
           <Route path='/about' element={<About />} />
           {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          

<Route path="/login" element={<AuthPage />} />


        </Routes>
        

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
