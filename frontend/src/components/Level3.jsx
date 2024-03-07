import React, {useState} from "react";
import  "./Level3.css";
import { Link } from "react-router-dom";

function Level3 () {
    const [quizes3] = useState([
        {
          title: 'Game 03',
          img: 'quiz1.jpg',
        }     
    ]);
    
    return (
        <div class='level3-bg'>
            <h1 className="level3h1">Level 03</h1><br/>
            <h2 className="level3h2">~ සතියේ දවස් සහා මාස (Days of the week and months) ~</h2>
            <h3 className="level3h4">01. සතියේ දවස් (Days of the week) </h3>
            <ul>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.1. සදුදා (Monday) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.2. අගහරුවාදා (Tuesday) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.3. බදාදා (Wednesday) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.4. බ්‍රහස්පතින්දා (Thursday) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.5. සිකුරාදා (Friday) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.6. සෙනසුරාදා (Saturday)  </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>01.7. ඉරිදා (Sunday) </Link><br/>
            </ul>
            <h3 className="level3h4">02. මාස (Months) </h3>
            <ul>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.1. ජනවාරි (January) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.2. පෙබරවාරි (February) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.3. මාර්තු (March) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.4. අප්‍රේල් (April)  </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.5. මැයි (May) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.6. ජුනි (June) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.7. ජූලි (July) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.8. අගෝස්තු (August) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.9. සැප්තැම්බර් (September) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.10. ඔක්තෝම්බර් (October) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.11. නොවැම්බර් (November) </Link><br/>
                <Link to ="/" className="level3li" style={{textDecoration:'none'}}>02.12. දෙසැම්බර් (December) </Link><br/>
            </ul>
            <div className="quiz3-bg">
            <h1 className="quiz3h1">Game 03</h1>
            <div className="quizes3">
            {quizes3.map((qui3) => (
              <div className="qui3">
                <img src={qui3.img} width="100%" height="300px" className="overlay" alt=" " />
                <Link to ={qui3.link} style={{textDecoration:'none'}}>
                <button className="q3btn">Start</button>
                </Link>
              </div>
            ))}
            </div>
        </div>
        </div>    
    );
};
export default Level3;
