import React, {useState} from "react";
import  "./Level2.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";


function Level2 () {
  
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
  
    const [quizes2] = useState([
        {
          title: 'Game 02',
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
            <h1 className="level2h1">Level 02</h1><br/>
            <h2 className="level2h2">~ ඉලක්කම් (Numbers) ~</h2>
            <h3 className="level2h4">01. 0 සිට 10 දක්වා ඉලක්කම් (Numbers from 0 to 10) </h3>
            <h4 className="level2li"><ul>
                <p onClick={() => fetchVideo('number0.jpg','number0')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.1. බිංදුව (Zero) </p><br/>
                <p onClick={() => fetchVideo('number1.jpg','number1')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.2. එක (One) </p><br/>
                <p onClick={() => fetchVideo('number2.jpg','number2')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.3. දෙක (Two) </p><br/>
                <p onClick={() => fetchVideo('number3.jpg','number3')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.4. තුන (Three) </p><br/>
                <p onClick={() => fetchVideo('number4.jpg','number4')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.5. හතර (Four) </p><br/>
                <p onClick={() => fetchVideo('number5.jpg','number5')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.6. පහ (Five) </p><br/>
                <p onClick={() => fetchVideo('number6.jpg','number6')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.7. හය (Six) </p><br/>
                <p onClick={() => fetchVideo('number7.jpg','number7')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.8. හත (Seven) </p><br/>
                <p onClick={() => fetchVideo('number8.jpg','number8')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.9. අට  (Eight) </p><br/>
                <p onClick={() => fetchVideo('number9.jpg','number9')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.10. නවය  (Nine) </p><br/>
                <p onClick={() => fetchVideo('number10.mp4','number10')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.11. දහය (Ten) </p><br/>
            </ul></h4>
            <h3 className="level2h4">02. 20 සිට 80 දක්වා දහයේ ගුණාකාර (Multiples of ten from 20 to 80) </h3>
            <h4 className="level2li"><ul>
                <p onClick={() => fetchVideo('number20.mp4','number20')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.1. විස්ස (Twenty) </p><br/>
                <p onClick={() => fetchVideo('number30.mp4','number30')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.2. තිහ (Thirty) </p><br/>
                <p onClick={() => fetchVideo('number40.mp4','number40')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.3. හතලිහ (Forty) </p><br/>
                <p onClick={() => fetchVideo('number50.mp4','number50')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.4. පනහා (Fifty) </p><br/>
                <p onClick={() => fetchVideo('number60.mp4','number60')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.5. හැට (Sixty) </p><br/>
                <p onClick={() => fetchVideo('number70.mp4','number70')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.6. හැත්තෑව (Seventy) </p><br/>
                <p onClick={() => fetchVideo('number80.mp4','number80')} className="level2li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.7. අසූව (Eighty) </p><br/>
            </ul></h4>
                
            
            <div className="quiz2-bg">
            <h1 className="quiz2h1">Game 02</h1>
            <div className="quizes2">
            {quizes2.map((qui2) => (
              <div className="qui2">
                <img className="level2Image" src={qui2.img} />
                <Link to ="/Quiz2" style={{textDecoration:'none'}}>
                <button className="q2btn">Start</button>
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
export default Level2;
