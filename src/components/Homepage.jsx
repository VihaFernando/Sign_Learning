import React, { useState} from 'react';
import MainHeader from './MainHeader';
import './Homepage.css';
import Footer from './Footer';
import { storage } from './firebase'; 

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const videoRef = storage.ref(`Sign_Learning/Signs/Objects/${searchQuery}.mp4`);
      const videoDownloadURL = await videoRef.getDownloadURL();
      setVideoURL(videoDownloadURL);
      setError('');
    } catch (error) {
      console.error('Error retrieving video:', error);
      setVideoURL('');
      setError('Video not found.');
    }
  };
  
  const handleScanImage = async () => {
  
    alert('Scanning...');
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
            {error && <div>{error}</div>}
            {videoURL && (
              <div>
                <video controls>
                  <source src={videoURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          <div className="right-content">
            <img src="homebg.jpg" alt="Placeholder" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
