import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from "./MainHeader";
import Footer from "./Footer";

import "./Quiz4.css";
import { quiz_6 } from "../config/quiz";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(50); 
  const [timerRunning, setTimerRunning] = useState(false);



  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < quiz_6.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(50); 
      setTimerRunning(true); 
    } else {
      setQuizCompleted(true);
      const quizNumber = currentQuestion + 1;
			fetch(`${process.env.REACT_APP_API_URL}/api/quiz-results?userId=yourUserId&quizNumber=${quizNumber}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					quizNumber: "quiz6",
					score,
					totalQuestions: quiz_6.length,
				}),
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.error("Error:", error));
    }
  }, [currentQuestion, quiz_6.length]);

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
    const currentQuestionData = quiz_6[currentQuestion];
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
            <p className='mark'>Total Marks: {score} / {quiz_6.length}</p>
            <Link to="/LesseonDetails" className="button_1">Check quiz progress</Link>
          </div>
        ) : (
          <div>
            <h3 className='current-queshion'>Question {currentQuestion + 1}</h3>
            <h3 className='main-queshion'>පහත දී ඇති සිoහල සoඤා සoකේතයට අදාළ පාට හෝ සත්වයන් තෝරන්න.</h3>
            <p className='queshion-type'>{quiz_6[currentQuestion].question}</p>
            <div className="options">
              {quiz_6[currentQuestion].options.map((option, index) => (
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
                  {answers.length > currentQuestion && !answers[currentQuestion].isCorrect && option === quiz_6[currentQuestion].correctAnswer && <span className="correct-answer-indicator">Correct Answer</span>}
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