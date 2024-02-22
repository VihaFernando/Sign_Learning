import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './MainPage.css';
import Footer from './Footer';

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <div className="welcome-text">
                <h1>Welcome to the <br></br>Sign Learning</h1>
                <p>Join us on our sign language journey!</p>
                <p>Explore and communicate <br></br>in a whole new way!</p>
            </div>
            <div className="action-buttons">
                <Link to="/signup">
                    <button className='signinbtn'>Sign In</button>
                </Link>
                <br></br>
                <button className='dictionarybtn'>Try Sign Dictionary</button>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
