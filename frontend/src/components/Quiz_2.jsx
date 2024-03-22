import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "./Quiz.css";
import { quiz_2 } from "../config/quiz";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [quizCompleted, setQuizCompleted] = useState(false);
	const [timer, setTimer] = useState(50);
	const [timerRunning, setTimerRunning] = useState(false);

	const handleNextQuestion = useCallback(() => {
		if (currentQuestion < quiz_2.length - 1) {
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
					quizNumber: "quiz2",
					score,
					totalQuestions: quiz_2.length,
				}),
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.error("Error:", error));
		}
	}, [currentQuestion, score]);

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
		const currentQuestionData = quiz_2[currentQuestion];
		const correctAnswer = currentQuestionData.correctAnswer;
		const isCorrect = selectedAnswer === correctAnswer;

		setAnswers([...answers, { answer: selectedAnswer, isCorrect }]);
		setTimerRunning(false);

		if (isCorrect) {
			setScore(score + 1);
		}
	};

	return (
		<div className="quiz-container-wrapper">
	      <MainHeader/>
			<div className="quiz-container">
				<div className="quiz-box">
					{quizCompleted ? (
						<div>
							<h3 className="completed-tag">Quiz Completed</h3>
							<p className="marks">
								Total Marks: {score} / {quiz_2.length}
							</p>
							<Link to="/LessonDetails" className="button_1">
								Check quiz Progress
							</Link>
						</div>
					) : (
						<div>
							<h3 className="Queshion-tag">Question {currentQuestion + 1}</h3>
							<h4 className="big-queshion">අකුරට අදාළ සoකේතය තෝරන්න.</h4>
							<p className="queshions">{quiz_2[currentQuestion].question}</p>
							<div className="options">
								{quiz_2[currentQuestion].options.map((option, index) => (
									<button
										key={index}
										onClick={() => handleAnswerClick(option)}
										className={
											answers.length > currentQuestion &&
											answers[currentQuestion].answer === option
												? answers[currentQuestion].isCorrect
													? "correct-answer"
													: "incorrect-answer"
												: ""
										}
										disabled={answers.length > currentQuestion}
									>
										<img src={option} alt={`Option ${index}`} />
										{answers.length > currentQuestion &&
											!answers[currentQuestion].isCorrect &&
											option === quiz_2[currentQuestion].correctAnswer && (
												<span className="correct-answer-indicator">Correct Answer</span>
											)}
									</button>
								))}
							</div>
							<p className="time">Time remaining: {timer} seconds</p>
							<button className="button_1" onClick={handleNextQuestion}>
								Next Question
							</button>
						</div>
					)}
				</div>
			</div>
			
			<Footer />
		</div>
	);
};

export default Quiz;
