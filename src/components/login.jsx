import React, { useState } from 'react';
import LoginCSS from './login.module.css';
import { FaGoogle } from 'react-icons/fa';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  const handleLogin = (e) => {
    e.preventDefault();

 
    if (username && password) {
      onLogin(username);
      setUser(username);
    } else {
      alert('Invalid username or password');
    }
  };


  return (
    <div class={LoginCSS.pic}>
    <div class={LoginCSS.frame}>
    <form onSubmit={handleLogin}>
      <h1 class ={LoginCSS.h1}>SignLearning</h1>
    <div class={LoginCSS.topnav}>
    <a class={LoginCSS.active} href="#home">Login</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    
    </div>
    <div className={LoginCSS.blueBox}>
      <h2>Welcome to SignLearning&#x270B;</h2>
      <div class= "input-container">
      <label>
      
      </label>
      <input type="text" value={username} placeholder ="&#x1F464;  Enter Username" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <br />
      <div class="input-container">
      <label>
      
      </label>
        <input type="password" value={password} placeholder="&#x1F512;  Enter Password" onChange={(e) => setPassword(e.target.value)} />
       </div>
      <br />
      <button type="submit" className={LoginCSS.log}>Login</button>
      <br/>
      <h3>OR LOGIN WITH</h3>
      <br/>
      <div class="input-container">
    
      <button type="submit" className={LoginCSS.gog}><FaGoogle className={LoginCSS.icon} />  Google</button>
    
      </div>
      <h4>Not a member ?  
      <a class="su" href="#SignUp">   Signup</a>
      </h4>
      </div>
      {user && (
        <div>
          <p>Welcome, {user}!</p>
        </div>
      )}
    </form>
    </div>
    </div>
  );
};



export default Login;