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
import Level4 from './components/Level4';
import Level5 from './components/Level5';
import Level6 from './components/Level6';
import Quiz1 from './components/Quiz_1';
import Quiz2 from './components/Quiz_2';
import Quiz3 from './components/Quiz_3';
import Quiz4 from './components/Quiz_4';
import Quiz5 from './components/Quiz_5';
import Quiz6 from './components/Quiz_6';
import ObjectDetection from './components/objectDetection';
import ImageClassification from './components/imageClassification';
import LessonDetails from './components/LessonDetails';

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
          <Route path="/Level4" element={<Level4/>}/>
          <Route path="/Level5" element={<Level5/>}/>
          <Route path="/Level6" element={<Level6/>}/>
          <Route path="/Quiz1" element={<Quiz1 quizNumber={1} />} />
          <Route path="/Quiz2" element={<Quiz2 quizNumber={2} />} />
          <Route path="/Quiz3" element={<Quiz3 quizNumber={3} />} />
          <Route path="/Quiz4" element={<Quiz4 quizNumber={4} />} />
          <Route path="/Quiz5" element={<Quiz5 quizNumber={5} />} />
          <Route path="/Quiz6" element={<Quiz6 quizNumber={6} />} />
          <Route path="/objectDetection" element={<ObjectDetection/>} />
          <Route path="/imageClassification" element={<ImageClassification/>} />
          <Route path="/LessonDetails" element={<LessonDetails />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
