
import React, { useState, useEffect } from 'react';
import { FaSignOutAlt, FaTrash, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './UserPopup.css';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

const UserPopup = ({ onClose, onSignOut, onDeleteAccount }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user) {
            const UID = user.uid;
            const db = getDatabase();
            const userRef = ref(db, `users/${UID}`);
            onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                setUserData(data);
            });
        }
    }, []);

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
                    <p>{userData?.username}</p>
                    <p>{userData?.email}</p>
                </div>
            </div>
            <div className="action-buttons">
            <Link to="/login">
                <button className="sign-out" onClick={onSignOut}>
                    <FaSignOutAlt /> Sign Out
                </button>
                </Link>
                
            </div>
        </div>
    );
};

export default UserPopup;