import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './MainPage.css';
import Footer from './Footer';

const MainPage = () => {
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        // Set animation done after a timeout to simulate animation completion
        const timer = setTimeout(() => {
            setAnimationDone(true);
        }, 1500); // Adjust timing as per your preference

        return () => clearTimeout(timer); // Clear timeout on unmount
    }, []);

    return (
        <div>
            <div className="main-page">
                <Header />
                <div className={`welcome-text ${animationDone ? 'animate' : ''}`}>
                    <h1 className='wText'>Welcome to the <br></br>Sign Learning</h1>
                    <p className='sText'>Join us on our sign language journey!</p>
                    <p className='sText'>Explore and communicate <br></br>in a whole new way!</p>
                </div>
                <div className={`action-buttons ${animationDone ? 'animate' : ''}`}>
                    <Link to="/signup">
                        <button className='signinbtn'>Sign In</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
