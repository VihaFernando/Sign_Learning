import React, { useState } from 'react';
import MainHeader from './MainHeader';
import './Homepage.css';
import Footer from './Footer';
import { storage, ref, getDownloadURL } from './firebase';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoURL, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedWord, setSearchedWord] = useState('');

  const handleSearch = async () => {
    try {
      const storageRef = ref(storage, `Sign_Learning/Signs/Objects/${searchQuery}.mp4`);
      if (storageRef) {
        const url = await getDownloadURL(storageRef);
        setVideoUrl(url);
        setError('');
        setIsModalOpen(true);
        setSearchedWord(searchQuery);
      } else {
        console.error('Storage reference is not properly initialized');
        setVideoUrl('');
        setError('Video not found');
      }
    } catch (error) {
      console.error('Error retrieving video:', error);
      setVideoUrl('');
      setError('Error retrieving video');
    }
  };

  const handleScanImage = async () => {
    alert('Scanning...');
  };

  const closeModal = () => {
    setVideoUrl('');
    setError('');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="home-page">
        <MainHeader />
        <div className="main-content">
          <div className="left-content">
            <div className="intro-text">
              <h1 className='welcome_text'>Sign <br></br>Dictionary</h1>
              <p className='welcome_Subtext'>Introducing new Sign Dictionary to make it easier to <br></br>learn signs of day-to-day objects and words.</p>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                className='searchbar'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
              <button onClick={handleScanImage}>Scan Image</button>
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="right-content">
            <img src="homebg.jpg" alt="Placeholder" />
          </div>
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <div className="video-box">
          <div className="video-area">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <video controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
              </video>
              {searchedWord && (
                <p className="searched-word">Searched Word: {searchedWord}</p>
              )}
              {!searchedWord && (
                <p className="searched-word">No searched word found</p>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
