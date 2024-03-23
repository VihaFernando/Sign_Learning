import React, {useState} from "react";
import  "./Level6.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";


function Level6 () {
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
    const [quizes6] = useState([
        {
          title: 'Game 06',
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
            <h1 className="level6h1">Level 06</h1><br/>
            <h2 className="level6h2">~ සත්තු සහා පාට (Animals and Colors) ~</h2>
            <h3 className="level6h4">01. සත්තු (Animals) </h3>
            <h4 className="level6li"><ul>
                <p onClick={() => fetchVideo('Dog.mp4','Dog')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.1. බල්ලා (Dog) </p><br/>
                <p onClick={() => fetchVideo('Cat.mp4','Cat')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.2. පූසා (Cat) </p><br/>
                <p onClick={() => fetchVideo('Fox.mp4','Fox')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.3. නරියා (Fox) </p><br/>
                <p onClick={() => fetchVideo('Elephant.mp4','Elephant')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.4. අලියා (Elephant) </p><br/>
                <p onClick={() => fetchVideo('Bird.mp4','Bird')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.5. කුරුල්ලා (Bird) </p><br/>
                <p onClick={() => fetchVideo('Lion.mp4','Lion')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.6. සිංහයා (Lion) </p><br/>
                <p onClick={() => fetchVideo('Tiger.mp4','Tiger')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.7. කොටියා (Tiger) </p><br/>
                <p onClick={() => fetchVideo('Rabbit.mp4','Rabbit')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.8. හාවා (Rabbit) </p><br/>
                <p onClick={() => fetchVideo('Cow.mp4','Cow')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.9. හරකා (Cow) </p><br/>
                <p onClick={() => fetchVideo('Snake.mp4','Snake')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.10. නයා (Snake) </p><br/>
            </ul></h4>
            <h3 className="level6h4">02. පාට (Colors) </h3>
            <h4 className="level6li"><ul>
                <p onClick={() => fetchVideo('Red.mp4','Red')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.1. රතු (Red) </p><br/>
                <p onClick={() => fetchVideo('Blue.mp4','Blue')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.2. නිල් (Blue) </p><br/>
                <p onClick={() => fetchVideo('Black.mp4','Black')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.3. කළු (Black) </p><br/>
                <p onClick={() => fetchVideo('White.mp4','White')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.4. සුදු (White) </p><br/>
                <p onClick={() => fetchVideo('Rose.mp4','Rose')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.5. රෝස (Pink) </p><br/>
                <p onClick={() => fetchVideo('Green.mp4','Green')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.6. කොල (Green) </p><br/>
                <p onClick={() => fetchVideo('Brown.mp4','Brown')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.7. දුඹුරු (Brown) </p><br/>
                <p onClick={() => fetchVideo('Yellow.mp4','Yellow')} className="level6li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.8. කහ (Yellow) </p><br/>
            </ul></h4>

            <div className="quiz6-bg">
            <h1 className="quiz6h1">Game 06</h1>
            <div className="quizes6">
            {quizes6.map((qui6) => (
              <div className="qui6">
                <img className="level6Image" src={qui6.img} />
                <Link to ="/Quiz6" style={{textDecoration:'none'}}>
                <button className="q6btn">Start</button>
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
export default Level6;
