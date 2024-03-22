import React, { useState } from 'react';
import './AboutUs.css';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';

function AboutUs() {
    const [showMissionVision, setShowMissionVision] = useState(false);
    const [showBigContainer, setShowBigContainer] = useState(false);

    const toggleMissionVision = () => {
        setShowMissionVision(!showMissionVision);
    };

    const toggleBigContainer = () => {
        setShowBigContainer(!showBigContainer);
    };

    return (
        <div>
            <Header/>
            <h1 className='topic_new'>About Us</h1>
            <div className="description-section">
                <div className="image-frame">
                    <img src='/about-us.jpg' alt="Deaf Kid" className="left-image" />
                </div>
                <div className="description-box">
                    <h2>About SignLearning</h2>
                    <p>We empower deaf children to achieve their educational milestones through the art of sign language, fostering a creative journey of communication and expression.</p>
                    <button className="learn-more-button" onClick={toggleMissionVision}>Learn More</button>
                </div>
            </div>

            {showMissionVision && (
                <div className="mission-vision-section">
                    <div className="mission-vision-box">
                        <h2>Our mission</h2>
                        <p>At SignLearning, our mission is to empower deaf children to achieve their educational milestones through the art of sign language. We believe that every child deserves access to quality education and communication, and we are committed to providing innovative solutions to support their learning journey.</p>
                    </div>
                    <div className="mission-vision-box">
                        <h2>Our vision</h2>
                        <p>Our vision is a world where deaf children have equal opportunities to thrive and succeed. We envision a future where sign language is recognized and valued as a fundamental tool for communication and education, enabling deaf children to reach their full potential.</p>
                    </div>
                    <div className="mission-vision-box">
                        <h2>Our Approach</h2>
                        <p>SignLearning takes a holistic approach to Sign Language education, combining interactive learning experiences with cutting-edge technology. Our programs are designed to foster creativity, confidence, and independence in deaf children, empowering them to navigate the world with ease.</p>
                    </div>
                    <div className="show-more-button">
                        <button className="show-more-button" onClick={toggleBigContainer}>
                            {showBigContainer ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            )}

            {showBigContainer && (
                <div className="big-container">
                    <h2 className="team-title">Our Team</h2>
                    <div className="boxes-container">
                        <div className="box">
                            <div className="circular-image-container">
                                <img src="dog.jpg" alt="Dog" />
                            </div>
                            <h3>Vihanga Fernando</h3>
                            <p>An Undergraduate Software Engineer at the University of Westminster, excels in programming and thrives on collaborative problem-solving. With a keen eye for detail and a dedication to continuous learning, he's poised to make significant contributions to software engineering.</p>
                            <RiInstagramFill className='icon' />
                            <FaLinkedin className='icon_2' />
                        </div>
                        <div className="box">
                            <div className="circular-image-container">
                                <img src="dog.jpg" alt="Dog" />
                            </div>
                            <h3>Sabeeha Salman</h3>
                            <p>An Undergraduate Software Engineer at the University of Westminster, excels in programming and thrives on collaborative problem-solving. With a keen eye for detail and a dedication to continuous learning, he's poised to make significant contributions to software engineering.</p>
                            <RiInstagramFill className='icon' />
                            <FaLinkedin className='icon_2' />
                        </div>
                        <div className="box">
                            <div className="circular-image-container">
                                <img src="dog.jpg" alt="Dog" />
                            </div>
                            <h3>Kavindi Ekanayake</h3>
                            <p>An Undergraduate Software Engineer at the University of Westminster, excels in programming and thrives on collaborative problem-solving. With a keen eye for detail and a dedication to continuous learning, he's poised to make significant contributions to software engineering.</p>
                            <RiInstagramFill className='icon' />
                            <FaLinkedin className='icon_2' />
                        </div>
                        <div className="box">
                            <div className="circular-image-container">
                                <img src="dog.jpg" alt="Dog" />
                            </div>
                            <h3>Piyumika Thennakoon</h3>
                            <p>An Undergraduate Software Engineer at the University of Westminster, excels in programming and thrives on collaborative problem-solving. With a keen eye for detail and a dedication to continuous learning, he's poised to make significant contributions to software engineering.</p>
                            <RiInstagramFill className='icon' />
                            <FaLinkedin className='icon_2' />
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default AboutUs;
