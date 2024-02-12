// MainHeader.jsx
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <span>SignLearning</span>
            </div>
            <div className="navigation">
                <a href="#Home">Home</a>
                <a href="#Lessons">Lessons</a>
                <a href="#Dashboard">Dashboard</a>
                <FaUserCircle size={28} /> {/* Set the desired size of the icon */}
            </div>
        </div>
    );
};

export default MainHeader;
