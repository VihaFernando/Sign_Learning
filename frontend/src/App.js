// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Homepage from './components/Homepage';
import ProgressTrackingPage from './components/ProgressTrackingPage';
import Login from './components/login';
import Signup from './components/Signup';
import Lessons from './components/Lessons'; // Import the Lessons component
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/progress" element={<ProgressTrackingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lessons" element={<Lessons />} /> {/* New route for Lessons */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Level1" element={<Level1 />} />
          <Route path="/Level2" element={<Level2/>} />
          <Route path="/Level3" element={<Level3/>} />
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
