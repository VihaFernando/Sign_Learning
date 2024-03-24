// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    // Navigate to the "/home" path when the login button is clicked
    navigate('/Login');
  };

  return (
    <div className="header">
      <div className="logo">SignLearning</div>
      <div className="menu">
        <a href="/AboutUs">About Us</a>
        <a href="/ContactUs">Contact</a>
        <a href="/login" onClick={handleLoginButtonClick}>Login</a>

      </div>
    </div >
  );
};

export default Header;
