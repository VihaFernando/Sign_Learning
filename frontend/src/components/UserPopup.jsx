// UserPopup.jsx
import React from 'react';
import { FaSignOutAlt, FaTrash, FaTimes, FaUserCircle } from 'react-icons/fa';
import './UserPopup.css';

const UserPopup = ({ onClose, onSignOut, onDeleteAccount }) => {
    // Dummy user data
    const userData = {
        email: 'niketh123@gmail.com',
        username: 'x_sasuke',
    };

    return (
        <div className="user-popup">
            <div className="close-icon" onClick={onClose}>
                <FaTimes />
            </div>
            <div className="user-info">
                <div className="user-icon">
                    <FaUserCircle size={48} />
                </div>
                <div className="user-details">
                    <p>Email: {userData.email}</p>
                    <p>Username: {userData.username}</p>
                </div>
            </div>
            <div className="action-buttons">
                <button className="sign-out" onClick={onSignOut}>
                    <FaSignOutAlt /> Sign Out
                </button>
                <button className="delete-account" onClick={onDeleteAccount}>
                    <FaTrash /> Delete Account
                </button>
            </div>
        </div>
    );
};

export default UserPopup;