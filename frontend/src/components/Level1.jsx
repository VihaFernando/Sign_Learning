import React, { useState,useEffect } from "react";
import "./Level1.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment,getDoc } from "firebase/firestore";



function Level1() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideoBox, setShowVideoBox] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [watchCount, setWatchCount] = useState(0);
  


  // Function to fetch video
  const fetchVideo = async (videoName, lessonName) => {
    try {
      const response = await fetch(`http://localhost:8000/videos/${videoName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setShowVideoBox(true);
      setLessonName(lessonName);
      setWatchCount(watchCount + 1); // Increment watch count
      writeLessonProgress(lessonName, watchCount + 1);
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
  const writeLessonProgress = async (lessonName, watchCount) => {
    try {
      const db = getFirestore(); // Get Firestore instance
      await addDoc(collection(db, 'lessonProgress'), { 
        lessonName,
        watchCount
      }); // Add document to collection
      console.log("Lesson progress written successfully.");
      
      // Log a message when the watch count and lesson name are printed
      console.log(`Lesson Name: ${lessonName}, Watch Count: ${watchCount}`);
    } catch (error) {
      console.error("Error writing lesson progress: ", error);
    }
  };
  
  return (
    <div>
      <MainHeader />
      <h1 className="level1h1">Level 01</h1>
      <br />
      <h2 className="level1h2">~ සිංහල අක්ෂර මාලාව (Sinhala Alphabet) ~</h2>
      <h3 className="level1h3">
        <ul>
          <p onClick={() => fetchVideo('Swara.mp4','Swara')} className="level1h3" style={{ textDecoration: 'none', cursor: 'pointer' }}>01. ස්වර අක්ෂර (Vowels)</p>
        </ul>
      </h3>
      <h3><div className="level1h4">02. ව්‍යඤ්ජන අක්ෂර (Consonants)</div></h3>
      <div className="level1li">
        <ul>
        <p onClick={() => fetchVideo('K.mp4', 'k')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.1. කණ්ඨජ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('CHA.mp4','CHA')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.2. තාලුජ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('T.mp4','T')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.3. මූර්ධජ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('THA.mp4','THA')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.4. දන්තජ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('P.mp4','P')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.5. ඕෂ්ඨජ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('Y.mp4','Y')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.6. අන්තඃස්ථ අක්ෂර</p><br />
        <p onClick={() => fetchVideo('SHA.mp4','SHA')} className="level1li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.7. ඌෂ්ම අක්ෂර</p><br />
        </ul>
      </div>

      {/* Game 01 Box */}
      <div className="quiz1-bg">
        <h1 className="quiz1h1">Game 01</h1>
        <div className="quizes1">
          {quizes1.map((qui1) => (
            <div className="qui1">
              <img className="level1Image" src={qui1.img} />
              <Link to ="/Quiz"style={{textDecoration:'none'}}>
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