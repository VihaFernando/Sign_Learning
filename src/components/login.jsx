import React, { useState } from 'react';
import LoginCSS from './login.module.css';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      setUser(username);
      alert('User Registered');
      // Redirect to the main page after successful login
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={LoginCSS.pic}>
      <div className={LoginCSS.frame}>
        <form onSubmit={handleLogin}>
          <h1 className={LoginCSS.h1}>SignLearning</h1>
          <div className={LoginCSS.topnav}>
            <a className={LoginCSS.active} href="#home">
              Login
            </a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <div className={LoginCSS.blueBox}>
            <h2>
              Welcome to SignLearning<span role="img" aria-label="peace hand">&#x270B;</span>
            </h2>
            <div className="input-container">
              <label></label>
              <input
                type="text"
                value={username}
                placeholder="&#x1F464;  Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />
            <div className="input-container">
              <label></label>
              <input
                type="password"
                value={password}
                placeholder="&#x1F512;  Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className={LoginCSS.log}>
              Login
            </button>
            <br />
            <h3>OR LOGIN WITH</h3>
            <br />
            <div className="input-container">
              <button type="submit" className={LoginCSS.gog}>
                <FaGoogle className={LoginCSS.icon} /> Google
              </button>
            </div>
            <h4>
              Not a member ?<a className="su" href="#SignUp">
                Signup
              </a>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
