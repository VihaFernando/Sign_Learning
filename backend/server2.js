const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const router = express.Router();




const db = admin.firestore();


router.use(bodyParser.json());
router.use(
	cors({
		origin: "*",
		optionsSuccessStatus: 200,
	})
);

router.post("/api/quiz-results", async (req, res) => {
	try {
		const { score, totalQuestions, quizNumber } = req.body;
		const userId = req.query.userId;

		console.log(score, totalQuestions, quizNumber, userId);
		const requiredData = [
			{ name: "score", value: score },
			{ name: "totalQuestions", value: totalQuestions },
			{ name: "quizNumber", value: quizNumber },
			{ name: "userId", value: userId },
		];

		for (let data of requiredData) {
			if (data.value === null || data.value === undefined) {
				return res.status(400).json({ message: `Missing required data: ${data.name}` });
			}
		}

		await db
			.collection("quizProgress")
			.doc(userId)
			.set(
				{
					[quizNumber]: {
						score,
						totalQuestions,
						timestamp: new Date(),
					},
				},
				{ merge: true }
			);

		res.status(200).json({ message: "Quiz results saved" });
	} catch (error) {
		console.error("Error saving quiz results:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

router.get("/api/quiz-progress", async (req, res) => {
	try {
		const userId = req.query.userId;
		const quizNumber = req.query.quizId;

		if (!userId) {
			res.status(400).json({ message: "userId is required." });
			return;
		}

		if (!quizNumber) {
			res.status(400).json({ message: "quizNumber is required." });
			return;
		}

		const snapshot = await db.collection("quizProgress").doc(userId).get();

		if (!snapshot.exists) {
			res.status(200).json({
				sucess: false,
				message: `No quiz ${quizNumber} progress available.`,
			});
			return;
		}

		const quizProgress = snapshot.data();

		if (quizProgress[quizNumber] === undefined) {
			res.status(200).json({
				sucess: false,
				message: `No quiz ${quizNumber} progress available.`,
			});
		} else {
			res.status(200).json({
				sucess: true,
				data: quizProgress[quizNumber],
			});
		}
	} catch (error) {
		console.error("Error fetching quiz progress:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

router.get("/api/delete-all", async (req, res) => {
	try {
		const userId = req.query.userId;

		await db.collection("quizProgress").doc(userId).delete();

		res.status(200).json({ message: "Deleted all data for user " + userId });
	} catch (error) {
		console.error("Error deleting data:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = router;