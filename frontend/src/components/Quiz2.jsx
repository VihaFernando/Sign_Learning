import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import Footer from './Footer';
import './Quiz.css';
;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(50);
  const [timerRunning, setTimerRunning] = useState(false);

  const quizData = [
    {
        question: '"අoක 0" ',
        options: ['number_0.2.png', 'number_0.1.png', 'number_0.png', 'number_3.png'],
        correctAnswer: 'number_0.png' 
      },
      {
        question: '"අoක 7" ',
        options: ['number_7.1.png', 'number-7.png', 'number7.2.png', 'number7.4.png'],
        correctAnswer: 'number-7.png' 
      },
      {
        question: '"අoක 1" ',
        options: ['number_1.2.png', 'number_1.1.png', 'number_1.3.png', 'number_1.png'],
        correctAnswer: 'number_1.png' 
      }, 
      {
        question: '"අoක 3" ',
        options: ['number-3.png', 'number_3.2.png', 'number_3.3.png', 'number_3.png'],
        correctAnswer: 'number-3.png' 
      },
      {
        question: '"අoක 9 " ',
        options: ['number9-1.png', 'number-9.png', 'number-9.3.png', 'number-9.2.png'],
        correctAnswer: 'number-9.png' 
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
            <h3 className='completed-tag'>Quiz Completed</h3>
            <p className='marks'>Total Marks: {score} / {quizData.length}</p>
            <Link to="/Level3" className="button_1">Next Page</Link>
          </div>
        ) : (
          <div>
            <h3 className='Queshion-tag'>Question {currentQuestion + 1}</h3>
            <h4 className='big-queshion'>අකුරට අදාළ සoකේතය තෝරන්න.</h4>
            <p className='queshions'>{quizData[currentQuestion].question}</p>
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
                  <img src={option} alt={`Option ${index}`} />
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
