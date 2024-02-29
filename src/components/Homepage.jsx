import React from 'react';
import MainHeader from './MainHeader';
import './Homepage.css';
import Footer from './Footer';



const Homepage = () => {

  const handleScanImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;

      const scanButton = document.createElement('button');
      scanButton.innerText = 'Scan';
      scanButton.style.padding = '10px';
      scanButton.style.fontSize = '16px';
      scanButton.style.marginTop = '10px';
      scanButton.style.background = '#4caf50';
      scanButton.style.color = '#fff';
      scanButton.style.border = 'none';
      scanButton.style.borderRadius = '5px';
      scanButton.style.cursor = 'pointer';
      scanButton.addEventListener('click', () => {
        //scanning logic will be coded
        alert('Scanning...');
      });

      const closeModal = () => {
        stream.getTracks().forEach(track => track.stop());
        document.body.removeChild(modal);
      };

      window.onpopstate = closeModal;

      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.background = 'rgba(0, 0, 0, 0.8)';
      modal.style.display = 'flex';
      modal.style.flexDirection = 'column';
      modal.style.alignItems = 'center';
      modal.style.justifyContent = 'center';
      modal.appendChild(video);
      modal.appendChild(scanButton);

      document.body.appendChild(modal);

      window.history.pushState(null, null, '');
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };


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
            <button onClick={handleScanImage}>Scan Image</button>
          </div>
        </div>
        <div className="right-content">
          <img src="homebg.jpg" alt="Placeholder" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
