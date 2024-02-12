import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">SignLearning</div>
      <div className="menu">
        <a href="#About">About Us</a>
        <a href="#Contact">Contact</a>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
