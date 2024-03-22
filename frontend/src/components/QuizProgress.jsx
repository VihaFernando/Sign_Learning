import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./LessonDetails.css";



const QuizProgress = ({ quizProgress, quizNumber }) => {
	if (!quizProgress || !quizProgress.sucess) {
		return <p className="No-quiz">{`No quiz ${quizNumber} progress available.`}</p>;
	}

	const percentage = (quizProgress.data.score / quizProgress.data.totalQuestions) * 100;

	return (
		
		<div className="game-details">
			
			<div className="marks-circle">
				<CircularProgressbar
					value={percentage}
					text={`Quiz ${quizNumber}: ${percentage.toFixed(2)}%`}
					styles={buildStyles({
						rotation: 0.25,
						strokeLinecap: "butt",
						textSize: "14px",
						pathTransitionDuration: 0.5,
						pathColor: `#3E3CDE`,
						textColor: "#333",
						trailColor: "#white",
						backgroundColor: "#e0e0e0",
						
					})}
				/>
			</div>
		</div>
	);
};

export default QuizProgress;
