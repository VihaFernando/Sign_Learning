import React, { useState } from 'react';
import './ProfileInfo.css';
import { FaEdit } from 'react-icons/fa';

const ProfileInfo = () => {
  const [profilePic, setProfilePic] = useState('profile-pic.jpg');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfilePic = () => {
    document.getElementById('profilePicInput').click();
  };

  return (
    <div className="profile-info">
      <input
        type="file"
        id="profilePicInput"
        accept="image/*"
        onChange={handleFileChange}
        className="profile-pic-input"
      />
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div onClick={handleEditProfilePic} className="edit-profile-pic-button">
        <FaEdit style={{ fontSize: '20px', cursor: 'pointer' }} />
      </div>
      <div className="user-info">
        <h2 className='userName'>No name</h2>
        <p className='userEmail'>noname@example.com</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
