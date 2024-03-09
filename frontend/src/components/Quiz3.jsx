import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import Footer from './Footer';
import './Quiz4.css'; 


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(50); 
  const [timerRunning, setTimerRunning] = useState(false);

  const quizData = [
    {
        question: '"ජූනි මාසය " ',
        options: ['මාර්තු මාසය', 'ජනවාරි මාසය', 'පෙබරවාරි මාසය ', 'ජූනි මාසය '],
        correctAnswer: 'ජූනි මාසය ' 
      },
      {
        question: '"ජනවාරි මාසය" ',
        options: ['පෙබරවාරි මාසය', 'අප්‍රේල් මාසය', 'ජනවාරි මාසය', 'ජුලි මාසය'],
        correctAnswer: 'ජනවාරි මාසය' 
      },
      {
        question: '"දෙසම්බර් මාසය" ',
        options: ['දෙසම්බර් මාසය', 'නොවෙම්බර් මාසය', 'මාර්තු මාසය', 'අගෝස්තු මාසය '],
        correctAnswer: 'දෙසම්බර් මාසය' 
      }, 
      {
        question: '"සදුදා" ',
        options: ['සෙනසුරාදා', 'ඉරිදා', 'සදුදා', 'අගහරුවදා'],
        correctAnswer: 'සදුදා' 
      },
      {
        question: '"සිකුරාදා" ',
        options: ['ඉරිදා', 'අගහරුවදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා'],
        correctAnswer: 'සිකුරාදා'
      },
   
  ];

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(50); 
      setTimerRunning(true); 
    } else {
      setQuizCompleted(true);
    }
  }, [currentQuestion, quizData.length]);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(intervalId);
          handleNextQuestion();
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer, timerRunning, handleNextQuestion]);

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestionData = quizData[currentQuestion];
    const correctAnswer = currentQuestionData.correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    setAnswers([...answers, { answer: selectedAnswer, isCorrect }]);
    setTimerRunning(false);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className='quiz-container-wrapper'>
        <MainHeader/>
    <div className="quiz-container">
      <div className="quiz-box">
        {quizCompleted ? (
          <div>
            <h3 className='completed-queshion_1'>Quiz Completed</h3>
            <p className='mark'>Total Marks: {score} / {quizData.length}</p>
            <Link to="/Level4" className="button_1">Next Page</Link>
          </div>
        ) : (
          <div>
            <h3 className='current-queshion'>Question {currentQuestion + 1}</h3>
            <h3 className='main-queshion'>පහත දී ඇති සිoහල සoඤා සoකේතයට අදාළ මාසය හෝ සතියේ දිනය තෝරන්න.</h3>
            <p className='queshion-type'>{quizData[currentQuestion].question}</p>
            <div className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={
                    answers.length > currentQuestion &&
                    answers[currentQuestion].answer === option
                      ? answers[currentQuestion].isCorrect
                        ? 'correct-answer'
                        : 'incorrect-answer'
                      : ''
                  }
                  disabled={answers.length > currentQuestion}
                >
                  {option} 
                  {answers.length > currentQuestion && !answers[currentQuestion].isCorrect && option === quizData[currentQuestion].correctAnswer && <span className="correct-answer-indicator">Correct Answer</span>}
                </button>
              ))}
            </div>
            <p className='time'>Time remaining: {timer} seconds</p>
            <button className="button_1" onClick={handleNextQuestion}>
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Quiz;
