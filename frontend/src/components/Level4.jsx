import React, {useState} from "react";
import  "./Level4.css";
import { Link } from "react-router-dom";

function Level4 () {
    const [quizes4] = useState([
        {
          title: 'Game 04',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div>
            <h1 className="level4h1">Level 04</h1><br/>
            <h2 className="level4h2">~ ක්‍රියා පද (Verbs) ~</h2>
            <h3 className="level4li"><ul>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>01. කනවා (Eat) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>02. බොනවා (Drink) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>03. යනවා (Go) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>04. එනවා (Come) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>05. මහනවා (Sew)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>06. උයනවා (Cook) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>07. දුවනවා (Run) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>08. ලියනවා (Write) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>09. චිත්‍ර අදිනවා (Draw) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>10. ඉදගන්නවා (Sit) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>11. නටනවා (Dance)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>12. ඉගෙන ගන්නවා (Learn)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>13. අඩනවා (Cry)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>14. පීනනවා (Swim)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>15. උගන්වනවා (Teach) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>16. බලනවා (Look) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>17. බඩගිනියි (Hungry)</Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>18. වතුර තිබහයි (Need water) </Link><br/>
                <Link to ="/" className="level4li" style={{textDecoration:'none'}}>19. නිදිමතයි (Drowsy)</Link><br/>
            </ul></h3>
            <div className="quiz4-bg">
            <h1 className="quiz4h1">Game 04</h1>
            <div className="quizes4">
            {quizes4.map((qui4) => (
              <div className="qui4">
                <img className="level4Image" src={qui4.img} />
                <Link to ={qui4.link} style={{textDecoration:'none'}}>
                <button className="q4btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        </div>    
    );
};
export default Level4;
