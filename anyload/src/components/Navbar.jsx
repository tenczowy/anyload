import React from 'react';
import '../styles/Navbar.css';
import { BsBoxes } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className="primary-nav">
      <div className="logo-container">
        <BsBoxes />
        <p>ANYLOAD</p>
      </div>
      <div className="menu-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
      <div className="cta-container">
        <button className="cta-btn">Contact Us </button>
      </div>
    </nav>
  );
}

export default Navbar;
