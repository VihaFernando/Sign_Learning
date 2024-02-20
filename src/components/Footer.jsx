import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact-details">
                <p>&copy; 2024 SignLearning. All rights reserved.</p>
                <p>
                    Follow us on:
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />

                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
