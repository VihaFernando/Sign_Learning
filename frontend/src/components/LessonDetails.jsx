import React, { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css"; 

import "./LessonDetails.css";
import QuizProgress from "../components/QuizProgress";

function LessonDetails() {
	const [quizProgress1, setQuizProgress1] = useState(null);
	const [quizProgress2, setQuizProgress2] = useState(null);
	const [quizProgress3, setQuizProgress3] = useState(null);
	const [quizProgress4, setQuizProgress4] = useState(null);
	const [quizProgress5, setQuizProgress5] = useState(null);
	const [quizProgress6, setQuizProgress6] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const quizProgressUrls = [
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz1`,
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz2`,
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz3`,
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz4`,
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz5`,
			`${process.env.REACT_APP_API_URL}/api/quiz-progress?userId=yourUserId&quizId=quiz6`,
		];

		const fetchPromises = quizProgressUrls.map((url) => fetch(url));
		const fetchData = async () => {
			try {
				const responses = await Promise.all(fetchPromises);
				const data = await Promise.all(responses.map((response) => response.json()));

				setQuizProgress1(data[0]);
				setQuizProgress2(data[1]);
				setQuizProgress3(data[2]);
				setQuizProgress4(data[3]);
				setQuizProgress5(data[4]);
				setQuizProgress6(data[5]);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching quiz progress:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	async function handleDeleteOldScore() {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/delete-all?userId=yourUserId`
		);
		const data = await response.json();
		return {
			success: response.ok,
			message: data.message,
		};
	}

	return (
		<div className="lesson-details">
			<h2>Lesson Quizzes Details</h2>
			<button className="button_1" onClick={handleDeleteOldScore}>
				Close
			</button>
			{loading ? (
				<p>Loading quiz progress...</p>
			) : (
				<>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress1} quizNumber={1} />
					</div>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress2} quizNumber={2} />
					</div>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress3} quizNumber={3} />
					</div>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress4} quizNumber={4} />
					</div>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress5} quizNumber={5} />
					</div>
					<div className="games-container">
						<QuizProgress quizProgress={quizProgress6} quizNumber={6} />
					</div>
				</>
			)}
		</div>
	);
}

export default LessonDetails;