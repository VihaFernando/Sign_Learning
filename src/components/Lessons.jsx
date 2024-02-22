import React, { useState } from "react";
import "./Lessons.css";
import {Link} from "react-router-dom";
function Lessons() {
  const [cards] = useState([
    {
      title: 'Level 1',
      img: 'level1.jpg',
      link: '/Level1'
    },
    {
      title: 'Level 2',
      img: 'level2.jpg'
    },
    {
      title: 'Level 3',
      img: 'level3.jpg'
    },
    {
      title: 'Level 4',
      img: 'level4.jpg'
    },
    {
      title: 'Level 5',
      img: 'level5.jpg'
    },
    {
      title: 'Level 6',
      img: 'level6.jpg'
    }
  ]);

  return (
    <div>
      <h1>Lessons</h1>
      <section className="lessons-section">
        <div className="container">
          <div className="cards">
            {cards.map((card) => (
              <div className="card" key={card.title}>
                <img src={card.img} width="100%" height="250px" className="overlay" alt=" " />
                <h3>{card.title}</h3>
                <Link to ={card.link}>
                <button className="btn" style={{ textDecoration: 'none' }}>Start</button>

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
