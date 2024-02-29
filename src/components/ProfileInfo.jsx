import React from 'react';
import './ProfileInfo.css'; 

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
      <div className="user-info">
        <h2>No name</h2>
        <p>noname@example.com</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
