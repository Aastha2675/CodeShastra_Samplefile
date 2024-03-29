import './App.css';
import LoginSignup from "./Components/Pages/LoginSignup";
import Cart from './Components/Pages/Cart';
import Footer from './Components/Footer'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Opt0 from './Components/Pages/Opt0';
import Opt1 from './Components/Pages/Opt1';
import Opt2 from './Components/Pages/Opt2';
import AboutUs from './Components/Pages/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Opt0 />} />
          <Route path='/opt1' element={<Opt1/>} />
          <Route path='/opt2' element={<Opt2/>} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
