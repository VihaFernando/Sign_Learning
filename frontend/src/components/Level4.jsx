import React, {useState} from "react";
import  "./Level4.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Level4 () {
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
    const [quizes4] = useState([
        {
          title: 'Game 04',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div>
            <MainHeader/>
            <h1 className="level4h1">Level 04</h1><br/>
            <h2 className="level4h2">~ ක්‍රියා පද (Verbs) ~</h2>
            <h3 className="level4li"><ul>
                <p onClick={() => fetchVideo('eating.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>01. කනවා (Eat) </p><br/>
                <p onClick={() => fetchVideo('drinking.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>02. බොනවා (Drink) </p><br/>
                <p onClick={() => fetchVideo('going.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>03. යනවා (Go) </p><br/>
                <p onClick={() => fetchVideo('coming.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>04. එනවා (Come) </p><br/>
                <p onClick={() => fetchVideo('tailaring.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>05. මහනවා (Sew)</p><br/>
                <p onClick={() => fetchVideo('cooking.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>06. උයනවා (Cook) </p><br/>
                <p onClick={() => fetchVideo('.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>07. දුවනවා (Run) </p><br/>
                <p onClick={() => fetchVideo('writing.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>08. ලියනවා (Write) </p><br/>
                <p onClick={() => fetchVideo('drawing.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>09. චිත්‍ර අදිනවා (Draw) </p><br/>
                <p onClick={() => fetchVideo('sitting.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>10. ඉදගන්නවා (Sit) </p><br/>
                <p onClick={() => fetchVideo('dancing.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>11. නටනවා (Dance)</p><br/>
                <p onClick={() => fetchVideo('learning.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>12. ඉගෙන ගන්නවා (Learn)</p><br/>
                <p onClick={() => fetchVideo('crying.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>13. අඩනවා (Cry)</p><br/>
                <p onClick={() => fetchVideo('swimming.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>14. පීනනවා (Swim)</p><br/>
                <p onClick={() => fetchVideo('teaching.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>15. උගන්වනවා (Teach) </p><br/>
                <p onClick={() => fetchVideo('watching.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>16. බලනවා (Look) </p><br/>
                <p onClick={() => fetchVideo('hungry.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>17. බඩගිනියි (Hungry)</p><br/>
                <p onClick={() => fetchVideo('thirsty.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>18. වතුර තිබහයි (Need water) </p><br/>
                <p onClick={() => fetchVideo('sleepy.mp4')} className="level3li" style={{ textDecoration: 'none', cursor: 'pointer' }}>19. නිදිමතයි (Drowsy)</p><br/>
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
