// MainHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <span>SignLearning</span>
            </div>
            <div className="navigation">
                <Link to="/home">Home</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/progress">Dashboard</Link>
                <FaUserCircle size={28} />
            </div>
        </div>
    );
};

export default MainHeader;
