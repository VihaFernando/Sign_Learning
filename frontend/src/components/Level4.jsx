import React, {useState} from "react";
import  "./Level4.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";


function Level4 () {
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
    const [quizes4] = useState([
        {
          title: 'Game 04',
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
            <h1 className="level4h1">Level 04</h1><br/>
            <h2 className="level4h2">~ ක්‍රියා පද (Verbs) ~</h2>
            <h3 className="level4li"><ul>
                <p onClick={() => fetchVideo('eating.mp4','eating')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01. කනවා (Eat) </p><br/>
                <p onClick={() => fetchVideo('drinking.mp4','drinking')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02. බොනවා (Drink) </p><br/>
                <p onClick={() => fetchVideo('going.mp4','going')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>03. යනවා (Go) </p><br/>
                <p onClick={() => fetchVideo('coming.mp4','coming')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>04. එනවා (Come) </p><br/>
                <p onClick={() => fetchVideo('tailaring.mp4','tailaring')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>05. මහනවා (Sew)</p><br/>
                <p onClick={() => fetchVideo('cooking.mp4','cooking')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>06. උයනවා (Cook) </p><br/>
                <p onClick={() => fetchVideo('writing.mp4','writing')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>08. ලියනවා (Write) </p><br/>
                <p onClick={() => fetchVideo('drawing.mp4','drawing')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>09. චිත්‍ර අදිනවා (Draw) </p><br/>
                <p onClick={() => fetchVideo('sitting.mp4','sitting')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>10. ඉදගන්නවා (Sit) </p><br/>
                <p onClick={() => fetchVideo('dancing.mp4','dancing')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>11. නටනවා (Dance)</p><br/>
                <p onClick={() => fetchVideo('learning.mp4','learning')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>12. ඉගෙන ගන්නවා (Learn)</p><br/>
                <p onClick={() => fetchVideo('crying.mp4','crying')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>13. අඩනවා (Cry)</p><br/>
                <p onClick={() => fetchVideo('swimming.mp4','swimming')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>14. පීනනවා (Swim)</p><br/>
                <p onClick={() => fetchVideo('teaching.mp4','teaching')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>15. උගන්වනවා (Teach) </p><br/>
                <p onClick={() => fetchVideo('watching.mp4','watching')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>16. බලනවා (Look) </p><br/>
                <p onClick={() => fetchVideo('hungry.mp4','hungry')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>17. බඩගිනියි (Hungry)</p><br/>
                <p onClick={() => fetchVideo('thirsty.mp4','thirsty')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>18. වතුර තිබහයි (Need water) </p><br/>
                <p onClick={() => fetchVideo('sleepy.mp4','sleepy')} className="level4li" style={{ textDecoration: 'none', cursor: 'pointer' }}>19. නිදිමතයි (Drowsy)</p><br/>
            </ul></h3>
            <div className="quiz4-bg">
            <h1 className="quiz4h1">Game 04</h1>
            <div className="quizes4">
            {quizes4.map((qui4) => (
              <div className="qui4">
                <img className="level4Image" src={qui4.img} />
                <Link to ="/Quiz4" style={{textDecoration:'none'}}>
                <button className="q4btn">Start</button>
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
export default Level4;
