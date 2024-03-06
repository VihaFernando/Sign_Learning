// LessonDetails.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './LessonDetails.css';

const LessonDetails = () => {
  const lessonGames = [
    { name: 'Game 1', marks: 90 },
    { name: 'Game 2', marks: 80 },
    { name: 'Game 3', marks: 75 },
    { name: 'Game 4', marks: 65 },
    { name: 'Game 5', marks: 70 },
    { name: 'Game 6', marks: 55 },
  ];

  return (
    <div className="lesson-details">
      <h2>Lesson Games Details</h2>
      <div className="games-container">
        {lessonGames.map((game, index) => (
          <div key={index} className="game-details">
            <div className="marks-circle">
              <CircularProgressbar
                value={game.marks}
                text={`${game.name}: ${game.marks}%`}

                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '12px',
                  pathTransitionDuration: 0.5,
                  pathColor: `#2596be`,
                  textColor: '#333',
                  trailColor: '#e0e0e0',
                  backgroundColor: '#e0e0e0',
                })}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonDetails;
