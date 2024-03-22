import React, { useState } from "react";
import "./Level1.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Level1() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideoBox, setShowVideoBox] = useState(false);

  // Function to fetch video
  const fetchVideo = async (videoName) => {
    try {
      const response = await fetch(`http://localhost:8000/videos/${videoName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setShowVideoBox(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to close the video box
  const closeVideoBox = () => {
    setVideoUrl("");
    setShowVideoBox(false);
  };

  const [quizes1] = useState([
    {
      title: 'Game 01',
      img: 'quiz1.jpg',
    }     
  ]);

  return (
    <div>
      <MainHeader />
      <h1 className="level1h1">Level 01</h1>
      <br />
      <h2 className="level1h2">~ සිංහල අක්ෂර මාලාව (Sinhala Alphabet) ~</h2>
      <h3 className="level1h3">
        <ul>
          <li onClick={() => fetchVideo('Bag.mp4')} className="level1h3" style={{ textDecoration: 'none', cursor: 'pointer' }}>01. ස්වර අක්ෂර (Vowels)</li>
        </ul>
      </h3>
      <div className="level1h4">02. ව්‍යඤ්ජන අක්ෂර (Consonants)</div>
      <div className="level1li">
        <ul>
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.1. කණ්ඨජ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.2. තාලුජ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.3. මූර්ධජ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.4. දන්තජ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.5. ඕෂ්ඨජ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.6. අන්තඃස්ථ අක්ෂර</Link><br />
          <Link to="/" className="level1li" style={{ textDecoration: 'none' }}>02.7. ඌෂ්ම අක්ෂර</Link><br />
        </ul>
      </div>

      {/* Game 01 Box */}
      <div className="quiz1-bg">
        <h1 className="quiz1h1">Game 01</h1>
        <div className="quizes1">
          {quizes1.map((qui1) => (
            <div className="qui1">
              <img className="level1Image" src={qui1.img} />
              <Link to ="/Quiz1"style={{textDecoration:'none'}}>
                <button className="q1btn">Start</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Video Box */}
      {showVideoBox && (
        <div className="video-box">
          <button className="close-button" onClick={closeVideoBox}>Close</button>
          {videoUrl && (
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}

export default Level1;
