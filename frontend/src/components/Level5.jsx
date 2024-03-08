import React, {useState} from "react";
import  "./Level5.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Level5 () {
    const [quizes5] = useState([
        {
          title: 'Game 05',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div>
            <MainHeader/>
            <h1 className="level5h1">Level 05</h1><br/>
            <h2 className="level5h2">~ පවුලේ සාමාජිකයෝ (Family members) ~</h2>
            <h3><ul>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>01. අම්මා (Mother) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>02. තාත්තා (Father) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>03. අයියා (Elder brother) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>04. අක්කා (Elder sister) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>05. නංගි (Sister) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>06. මල්ලි (Brother) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>07. ආච්චි (Grandmother) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>08. සීයා (Grandfather) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>09. නැන්දා (Aunt) </Link><br/>
                <Link to ="/" className="level5li" style={{textDecoration:'none'}}>10. මාමා (Uncle) </Link><br/>
            </ul></h3>
            <div className="quiz5-bg">
            <h1 className="quiz5h1">Game 05</h1>
            <div className="quizes5">
            {quizes5.map((qui5) => (
              <div className="qui5">
                <img src={qui5.img} />
                <Link to ={qui5.link} style={{textDecoration:'none'}}>
                <button className="q5btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        <Footer/>
        </div>    
    );
};
export default Level5;
