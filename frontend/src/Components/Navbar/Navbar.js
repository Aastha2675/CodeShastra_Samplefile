import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("opt0");
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Bling</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("opt0") }}>
          <Link style={{textDecoration: "none"}} to='/'>Opt0</Link>{menu === "opt0" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("opt1") }}>
          <Link style={{textDecoration: "none"}} to='/opt1'>Opt1</Link>{menu === "opt1" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("opt2") }}>
          <Link style={{textDecoration: "none"}} to='/opt2'>Opt2</Link>{menu === "opt2" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("aboutus") }}>
          <Link style={{textDecoration: "none"}} to='/aboutus'>About Us</Link>{menu === "aboutus" ? <hr/> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-login-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
