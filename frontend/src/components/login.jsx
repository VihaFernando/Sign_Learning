import React, { useState } from 'react';
import LoginCSS from './login.module.css';
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, database } from "./firebase"; 
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
 
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // You might want to do something with userCredential.user
        console.log(userCredential.user);
        alert('User logged in successfully');
        navigate('/home');

        // Redirect or do something after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Login failed: ${errorMessage}`);
      });
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // If user signs in with Google, use their email as username
      setUsername(user.email);
      
      // You can add more data to the user object if needed
      const userData = {
        username: user.email,
        // Add more data if needed
      };

      // Write data to the database
      await database.ref('users/' + user.uid).set(userData);

      alert('User signed in with Google successfully');
      // Redirect or do something after successful login
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <body className={LoginCSS.body}>
      <div>
        <div className={LoginCSS.pic}>
          <div className={LoginCSS.frame}>
            <h1 className={LoginCSS.h1}>SignLearning</h1>
            <div className={LoginCSS.topnav}>
              <a className={LoginCSS.active} to={Login}>Login</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
            <form onSubmit={handleLogin}>
              <div className={LoginCSS.blueBox}>
                <h2 className={LoginCSS.h2}>Welcome to SignLearning&#x270B;</h2>
                <div className="x1">
                  <label></label>
                  <input type="text" className={LoginCSS.input} value={username} placeholder="&#x1F464;  Enter Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br />
                <div className="input-container">
                  <label></label>
                  <input type="password" className={LoginCSS.input} value={password} placeholder="&#x1F512;  Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button type="submit" className={LoginCSS.log}>Login</button>
                <br />
                <h3 className={LoginCSS.h3}>OR LOGIN WITH</h3>
                <br />
                <div className="input-container">
                  <button type="button" onClick={handleSignInWithGoogle} className={LoginCSS.gog}><FaGoogle className={LoginCSS.icon} /> Google</button>
                </div>
                <h4>Not a member ? <a className={LoginCSS.h4} href="#SignUp">Signup</a></h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;