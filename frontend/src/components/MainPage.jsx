import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './MainPage.css';
import Footer from './Footer';

const MainPage = () => {
    return (
        <div>
        <div className="main-page">
            <Header />
            <div className="welcome-text">
                <h1 className='wText'>Welcome to the <br></br>Sign Learning</h1>
                <p className='sText'>Join us on our sign language journey!</p>
                <p className='sText'>Explore and communicate <br></br>in a whole new way!</p>
            </div>
            <div className="action-buttons">
                <Link to="/signup">
                    <button className='signinbtn'>Sign In</button>
                </Link>
                <br></br>
                <button className='dictionarybtn'>Try Sign Dictionary</button>
            </div>    
        </div>
        <Footer />
        </div>
    );
};

export default MainPage;
