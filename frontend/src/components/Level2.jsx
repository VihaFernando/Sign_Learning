import React, {useState} from "react";
import  "./Level2.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Level2 () {
    const [quizes2] = useState([
        {
          title: 'Game 02',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div>
            <MainHeader/>
            <h1 className="level2h1">Level 02</h1><br/>
            <h2 className="level2h2">~ ඉලක්කම් (Numbers) ~</h2>
            <h3 className="level2li"><ul>
                <Link to ="/" className="level2li" style={{textDecoration:'none'}}>01. 0 සිට 10 දක්වා ඉලක්කම් (Numbers from 0 to 10) </Link><br/>
                <Link to ="/" className="level2li" style={{textDecoration:'none'}}>02. 20 සිට 100 දක්වා දහයේ ගුණාකාර (Multiples of ten from 20 to 100)</Link><br/>    
            </ul></h3>
            <div className="quiz2-bg">
            <h1 className="quiz2h1">Game 02</h1>
            <div className="quizes2">
            {quizes2.map((qui2) => (
              <div className="qui2">
                <img className="level2Image" src={qui2.img} />
                <Link to ={qui2.link} style={{textDecoration:'none'}}>
                <button className="q2btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        <Footer/>
        </div>    
    );
};
export default Level2;
