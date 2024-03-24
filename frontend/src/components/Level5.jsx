import React, {useState} from "react";
import  "./Level5.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";


function Level5 () {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideoBox, setShowVideoBox] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [watchCount, setWatchCount] = useState(0);

  // Function to fetch video
  const fetchVideo = async (videoName,lessonName) => {
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
    const [quizes5] = useState([
        {
          title: 'Game 05',
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
            <MainHeader/>
            <h1 className="level5h1">Level 05</h1><br/>
            <h2 className="level5h2">~ පවුලේ සාමාජිකයෝ (Family members) ~</h2>
            <h3 className="level5li"><ul>
                <p onClick={() => fetchVideo('amma.mp4','amma')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01. අම්මා (Mother) </p><br/>
                <p onClick={() => fetchVideo('thaththa.mp4','thaththa')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02. තාත්තා (Father) </p><br/>
                <p onClick={() => fetchVideo('ayya.mp4','ayya')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>03. අයියා (Elder brother) </p><br/>
                <p onClick={() => fetchVideo('akka.mp4','akka')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>04. අක්කා (Elder sister) </p><br/>
                <p onClick={() => fetchVideo('nangi.mp4','nangi')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>05. නංගි (Sister) </p><br/>
                <p onClick={() => fetchVideo('malli.mp4','malli')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>06. මල්ලි (Brother) </p><br/>
                <p onClick={() => fetchVideo('grandma.mp4','grandma')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>07. ආච්චි (Grandmother) </p><br/>
                <p onClick={() => fetchVideo('grandfather.mp4','grandfather')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>08. සීයා (Grandfather) </p><br/>
                <p onClick={() => fetchVideo('nanda.mp4','nanda')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>09. නැන්දා (Aunt) </p><br/>
                <p onClick={() => fetchVideo('maama.mp4','maama')} className="level5li" style={{ textDecoration: 'none', cursor: 'pointer' }}>10. මාමා (Uncle) </p><br/>
            </ul></h3>
            <div className="quiz5-bg">
            <h1 className="quiz5h1">Game 05</h1>
            <div className="quizes5">
            {quizes5.map((qui5) => (
              <div className="qui5">
                <img className="level5Image" src={qui5.img} />
                <Link to ="/Quiz5"style={{textDecoration:'none'}}>
                <button className="q5btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        <Footer/>

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
};
export default Level5;
