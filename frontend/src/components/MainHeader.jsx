// MainHeader.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './MainHeader.css';
import UserPopup from './UserPopup';

const MainHeader = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate();

    const handleUserIconClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSignOutClick = () => {
    navigate('/login');
    };

    const handleDeleteAccount = () => {
        // Implement your delete account logic here
        // Example: call a delete account function or dispatch an action
    };

    return (
        <div className="main-header">
            <div className="logo">
                <span>SignLearning</span>
            </div>
            <div className="navigation">
                <Link to="/home">Home</Link>
                <Link to="/lessons">Lessons</Link>
                <Link to="/AboutUs">About Us</Link>
                <div className="user-icon" onClick={handleUserIconClick}>
                    <FaUserCircle size={28} />
                </div>
            </div>
            {isPopupOpen && (
                <UserPopup
                    onClose={handleClosePopup}
                    onSignOut={handleSignOutClick}
                    onDeleteAccount={handleDeleteAccount}
                />
            )}
        </div>
    );
};

export default MainHeader;
