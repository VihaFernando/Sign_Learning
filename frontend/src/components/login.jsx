import React, { useState, useEffect } from 'react'; // Add useEffect import
import LoginCSS from './login.module.css';
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'; // Fix import statement
import { auth} from "./firebase"; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
 

  const handleLogin = (e) => {
    e.preventDefault();
    
 
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // You might want to do something with userCredential.user
        console.log(userCredential.user);
        alert('User logged in successfully');
        alert(`Welcome, ${user.email}`);
        navigate('/home');
        
      

        // Redirect or do something after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Login failed: ${errorMessage}`);
      });
  };
  

  useEffect(() => {
    // Add an authentication state observer
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      
    });
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
    
    // Clean up the observer when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [auth]); // Dependency array ensures the effect runs only once


  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      setEmail(user.email);
      
      

      alert('User signed in with Google successfully');
      // Redirect or do something after successful login
      navigate('/home');

    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      // If Remember Me is checked, store the email in local storage
      localStorage.setItem('rememberedEmail', email);
    } else {
      // If Remember Me is unchecked, remove the email from local storage
      localStorage.removeItem('rememberedEmail');
    }
  };

  return (
    <body className={LoginCSS.body}>
      <div>
        <div className={LoginCSS.pic}>
          <div className={LoginCSS.frame}>
            <h1 className={LoginCSS.h1}>SignLearning</h1>
            <div className={LoginCSS.topnav}>
              <Link className={LoginCSS.active} to={Login}>Login</Link>
              <Link to="/ContactUs">Contact</Link>
              <Link to="/AboutUs">About</Link>
            </div>
            <form /*onSubmit={handleLogin}*/>
              <div className={LoginCSS.blueBox}>
                <h2 className={LoginCSS.h2}>Welcome to SignLearning&#x270B;</h2>
                <div className="x1">
                  <label></label>
                  <input type="email" className={LoginCSS.input} value={email} placeholder="&#x1F464;  Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="input-container">
                  <label></label>
                  <input type="password" className={LoginCSS.input} value={password} placeholder="&#x1F512;  Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div class="remember-me">
                  <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                  <label>Remember Me</label>
                </div>
                <button type="submit" onClick={handleLogin} className={LoginCSS.log}>Login</button>
                <br />
                <h3 className={LoginCSS.h3}>OR LOGIN WITH</h3>
                <br />
                <div className="input-container">
                  <button type="button" onClick={handleSignInWithGoogle} className={LoginCSS.gog}><FaGoogle className={LoginCSS.icon} /> Google</button>
                </div>
                <h4 className={LoginCSS.h4}>Not a member ? <Link className={LoginCSS.h4a} to="/Signup">Signup</Link></h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
