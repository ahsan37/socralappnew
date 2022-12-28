import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
// import '../styles/NavBar.css'

function NavBar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
        <h3>Socr<span style={{ color: '#FF4500' }}>al</span></h3>
     <nav ref = {navRef}>
        <a href = "/#">Home</a>
        <a href = "/#">Login</a>
        <button className = "nav-btn nav-close-btn" onClick = {showNavBar}>
            <FaTimes/>
        </button>
     </nav>
        <button className = "nav-btn" onClick = {showNavBar}>
            <FaBars/>
        </button>
    </header>
  );
}

export default NavBar