import React, {useState} from "react";
import  "./Level6.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Level6 () {
    const [quizes6] = useState([
        {
          title: 'Game 06',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div>
            <MainHeader/>
            <h1 className="level6h1">Level 06</h1><br/>
            <h2 className="level6h2">~ සත්තු සහා පාට (Animals and Colors) ~</h2>
            <h3 className="level6h4">01. සත්තු (Animals) </h3>
            <h4 className="level6li"><ul>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.1. බල්ලා (Dog) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.2. පූසා (Cat) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.3. නරියා (Fox) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.4. අලියා (Elephant) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.5. කුරුල්ලා (Bird) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.6. සිංහයා (Lion) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.7. කොටියා (Tiger) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.8. හාවා (Rabbit) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.9. හරකා (Cow) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>01.10. නයා (Snake) </Link><br/>
            </ul></h4>
            <h3 className="level6h4">02. පාට (Colors) </h3>
            <h4 className="level6li"><ul>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.1. රතු (Red) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.2. නිල් (Blue) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.3. කළු (Black) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.4. සුදු (White) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.5. රෝස (Pink) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.6. කොල (Green) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.7. දුඹුරු (Brown) </Link><br/>
                <Link to ="/" className="level6li" style={{textDecoration:'none'}}>02.8. කහ (Yellow) </Link><br/>
            </ul></h4>

            <div className="quiz6-bg">
            <h1 className="quiz6h1">Game 06</h1>
            <div className="quizes6">
            {quizes6.map((qui6) => (
              <div className="qui6">
                <img className="level6Image" src={qui6.img} />
                <Link to ={qui6.link} style={{textDecoration:'none'}}>
                <button className="q6btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        <Footer/>
        </div>    
    );
};
export default Level6;
