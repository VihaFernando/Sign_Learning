import React, { useState } from 'react';
import './ProgressSection.css';


const ProgressSection = ({ title, progress }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div className="progress-section" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <h3 class="progressTitle">{title}</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{`${progress}% Completed`}</p>

      {hovered && (
        <div className="details-box">
          {/* Add details specific to each section here */}
          {title === 'Lessons' && (
            <>
              <p>Completed Lessons: 30</p>
              <p>Lessons to be done: 20</p>
            </>
          )}
          {title === 'Games' && (
            <>
              <p>Game 1 Results: 80%</p>
              <p>Game 2 Results: 60%</p>
              {/* Add more game results as needed */}
            </>
          )}
          {title === 'Dictionary Usage' && (
            <>
              <p>New Words Learned: 50</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressSection;
