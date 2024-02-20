import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import backgroundImage from '../assets/bgimage.png';

import './Signup.css';

function Signup() {
    const [count, setCount] = useState(0);
    return (
        <div className="bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', minHeight: '100vh',minHeight: '100vh',backgroundAttachment:'fixed' }}>
      
            <div className="container_1">
                <nav className="navbar">
                    <div className="left-links">
                        <Link to="#" className="signlearning">SignLearning</Link>
                    </div>
                    <div className="right-links">
                        <Link to="/AboutUs" className="About-Us">About Us</Link>
                        <Link to="/contactus" className="About-Us">Contact</Link>
                    </div>
                </nav>  
                <div className="container">
                    <div className='signup-box'>
                        <div className='first-heading'>
                            <img src='/Waving Hand Emoji [Free Download IOS Emojis].png' alt='Wave Hand Emoji' className='waveHand'/>
                            <h1 className='Topic'>Welcome to Sign Learning</h1>
                        </div>
                        <form>
                            <div className="input-box">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" placeholder='Enter your name' required />
                                        <FaUser className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div className="input-email">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" placeholder='Enter your email' required />
                                        <MdEmail className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div className="input-contact">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" placeholder='Enter your phone' required />
                                        <FaPhoneSquareAlt className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div className="input-password">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" placeholder='Create a password' required />
                                        <FaLock className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <button type="submit" className="login-button">Sign Up</button>
                            </div>
                            <h6>OR Sign Up with</h6>
                            <div>
                                <button type="click" className="google-button">
                                    <FcGoogle className='icon_1' />
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className="register-link">
                                <p>Already have an account? <a href="#">Sign in</a></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='text_1'>
                    <div className="intro-heading">New Here?</div>
                    <div> <p className='intro'>We empower deaf children to achieve their educational milestones through the art of sign language, fostering a creative journey of communication and expression.</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Signup;
