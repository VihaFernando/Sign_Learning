import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'; 
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import backgroundImage from '../assets/bgimage.png';
import firebase from '../components/firebase'; 
import { getDatabase, ref, set } from "firebase/database";


import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignup = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            navigate('/home');
        } catch(error) {
            setError(error.message);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                setError("Please enter a valid email address");
                return;
            }
            const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
            if (user) {
                writeUserData(user.uid, name, email);
                alert("Account created successfully");
                navigate('/home');
            }
        } catch(error) {
            setError(error.message);
        }
    };
    const writeUserData = (UID, name, email) => {
        const db = getDatabase();
        set(ref(db, 'users/' + UID), {
            username: name,
            email: email,
            
        });
    }


    return (
        <div className="bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', minHeight: '100vh', minHeight: '100vh', backgroundAttachment: 'fixed' }}>
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
                            <h3 className='topic_2'>Hey enter your details to sign Up!</h3>
                        </div>
                        <form>
                            <div className="input-box">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" value={name} placeholder='Enter your name' onChange={(e) =>setName(e.target.value)} />
                                        <FaUser className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div className="input-email">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="text" value={email} placeholder='Enter your email' onChange={(e) =>setEmail(e.target.value)} />
                                        <MdEmail className='icon' />
                                    </div>
                                </label>
                            </div>

                            <div className="input-password">
                                <label>
                                    <div className="input-with-icon">
                                        <input type="password" value={password} placeholder='Create a password' onChange={(e) => setPassword(e.target.value)} />
                                        <FaLock className='icon' />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <button onClick={submit} className="login-button">Sign Up</button>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                            <h6>OR Sign Up with</h6>
                            <div>
                                <button type="button" className="google-button" onClick={handleGoogleSignup}>
                                    <FcGoogle className='icon_1' />
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className="register-link">
                                <p>Already have an account? <a href="./login">Sign in</a></p>
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
