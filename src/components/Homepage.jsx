import React from 'react';
import MainHeader from './MainHeader';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="home-page">
      <MainHeader />
      <div className="main-content">
        <div className="left-content">
          <div className="intro-text">
            <h1>Sign <br></br>Dictionary</h1>
            <p>Introducing new Sign Dictionary to make it easier to learn signs of day-to-day objects and words.</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
            <button>Upload Image</button>
          </div>
        </div>
        <div className="right-content">
          <img src="homebg.jpg" alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
