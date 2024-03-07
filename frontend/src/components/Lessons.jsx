import React, { useState } from "react";
import "./Lessons.css";
import {Link} from "react-router-dom";
function Lessons() {
  const [lessonCards] = useState([
    {
      title: 'Level 1',
      img: 'level1.jpg',
      link: '/Level1'
      
    },
    {
      title: 'Level 2',
      img: 'level2.jpg',
      
    },
    {
      title: 'Level 3',
      img: 'level3.jpg',
    
    },
    {
      title: 'Level 4',
      img: 'level4.jpg',
      
    },
    {
      title: 'Level 5',
      img: 'level5.jpg',
      
    },
    {
      title: 'Level 6',
      img: 'level6.jpg',
      
    }
  ]);

  return (
    <div className="lesson-bg">
      <h1 className="lesson-h">Lessons</h1>
      <section className="lesson-section">
        <div className="lesson-container">
          <div className="lessonCards">
            {lessonCards.map((lessonCard) => (
              <div className="lessonCard" key={lessonCard.title}>
                <img src={lessonCard.img} />
                <h3 className="level">{lessonCard.title}</h3>
                <Link to ={lessonCard.link} style={{textDecoration:'none'}}>
                <button className="level-btn">Start</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lessons;
