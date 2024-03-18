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
      question: '"අ" ',
      options: ['letterA.png', 'L2.png', 'l3.png', 'l16.png'],
      correctAnswer: 'letterA.png'
    },
    {
      question: '"ව" ',
      options: ['l11.png', 'l13.png', 'l12.png', 'lettterw.png'],
      correctAnswer: 'lettterw.png'
    },
    {
      question: '"ය " ',
      options: ['l9.png', 'L11.png', 'lettery.png', 'l10.png'],
      correctAnswer: 'lettery.png'
    },
    {
      question: '"උ" ',
      options: ['letterU.png', 'L16.png', 'l6.png', 'l17.png'],
      correctAnswer: 'letterU.png'
    },
    {
      question: '"බ " ',
      options: ['letterA.png', 'L7.png', 'l8.png', 'l17.png'],
      correctAnswer: 'L7.png'
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
            <Link to="/Level2" className="button_1">Next Page</Link>
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
