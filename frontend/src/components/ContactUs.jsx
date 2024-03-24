import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Header />
      <div className="image-container">
        <img src='/brooke-cagle-tLG2hcpITZE-unsplash.jpg' alt="Contact Us" className="call-image" />
        <div className="overlay">
          <h1 className='contact_topic'>Contact Us</h1>
        </div>
      </div>

      <div className="contact-options">
        
       <ContactOption
           title="Send us an Email"
           description={<p>Prefer email? Reach out to us at <a href="mailto:signlearning@gmail.com">signlearning@gmail.com</a> and we'll assist you promptly.</p>}
          />

        <ContactOption
          title="Connect on Social Media"
          description="Join our community on Facebook and Instagram for updates and exclusive content."
          socialLinks={[
            { name: "Facebook", url: "https://www.facebook.com/" },
            { name: "Instagram", url: "https://www.instagram.com/" }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

const ContactOption = ({ title, description, linkText, linkTo, socialLinks }) => {
  return (
    <div className="contact-option">
      <h2>{title}</h2>
      <p>{description}</p>
      {linkText && linkTo &&
        <Link to={linkTo} className="button">{linkText}</Link>
      }
      {socialLinks &&
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url}>{link.name}</a>
          ))}
        </div>
      }
    </div>
  );
};

export default ContactUs;