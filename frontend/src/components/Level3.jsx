import React, {useState} from "react";
import  "./Level3.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, increment } from "firebase/firestore";

function Level3 () {
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
    const [quizes3] = useState([
        {
          title: 'Game 03',
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
            <h1 className="level3h1">Level 03</h1><br/>
            <h2 className="level3h2">~ සතියේ දවස් සහා මාස (Days of the week and months) ~</h2>
            <h3 className="level3h4">01. සතියේ දවස් (Days of the week) </h3>
            <h4 className="level3li"><ul>
                <p onClick={() => fetchVideo('Monday.mp4','Monday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.1. සදුදා (Monday) </p><br/>
                <p onClick={() => fetchVideo('Tuseday.mp4','Tuseday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.2. අගහරුවාදා (Tuesday) </p><br/>
                <p onClick={() => fetchVideo('Wednesday.mp4','Wednesday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.3. බදාදා (Wednesday) </p><br/>
                <p onClick={() => fetchVideo('Thursday.mp4','Thursday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.4. බ්‍රහස්පතින්දා (Thursday) </p><br/>
                <p onClick={() => fetchVideo('Friday.mp4','Friday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.5. සිකුරාදා (Friday) </p><br/>
                <p onClick={() => fetchVideo('Saturday.mp4','Saturday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.6. සෙනසුරාදා (Saturday)  </p><br/>
                <p onClick={() => fetchVideo('Sunday.mp4','Sunday')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01.7. ඉරිදා (Sunday) </p><br/>
            </ul></h4>
            <h3 className="level3h4">02. මාස (Months) </h3>
            <h4 className="level3li"><ul>
                <p onClick={() => fetchVideo('January.mp4','January')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.1. ජනවාරි (January) </p><br/>
                <p onClick={() => fetchVideo('February.mp4','February')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.2. පෙබරවාරි (February) </p><br/>
                <p onClick={() => fetchVideo('March.mp4','March')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.3. මාර්තු (March) </p><br/>
                <p onClick={() => fetchVideo('April.mp4','April')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.4. අප්‍රේල් (April)  </p><br/>
                <p onClick={() => fetchVideo('May.mp4','May')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.5. මැයි (May) </p><br/>
                <p onClick={() => fetchVideo('June.mp4','June')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.6. ජුනි (June) </p><br/>
                <p onClick={() => fetchVideo('July.mp4','July')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.7. ජූලි (July) </p><br/>
                <p onClick={() => fetchVideo('August.mp4','August')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.8. අගෝස්තු (August) </p><br/>
                <p onClick={() => fetchVideo('September.mp4','September')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.9. සැප්තැම්බර් (September) </p><br/>
                <p onClick={() => fetchVideo('Octomber.mp4','Octomber')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.10. ඔක්තෝම්බර් (October) </p><br/>
                <p onClick={() => fetchVideo('November.mp4','November')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.11. නොවැම්බර් (November) </p><br/>
                <p onClick={() => fetchVideo('December.mp4','December')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02.12. දෙසැම්බර් (December) </p><br/>
            </ul></h4>
            <div className="quiz3-bg">
            <h1 className="quiz3h1">Game 03</h1>
            <div className="quizes3">
            {quizes3.map((qui3) => (
              <div className="qui3">
                <img className="level3Image" src={qui3.img}  />
                <Link to ="/Quiz3" style={{textDecoration:'none'}}>
                <button className="q3btn">Start</button>
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
export default Level3;
