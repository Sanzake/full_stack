import express from "express";

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const router = express.Router();

router.get("/", (req, res) => {
	const page = req.query.page || 1;
	const limit = req.query.limit || 10;

	const tasksToShow = [];
	for (let i = (page - 1) * limit; i < page * limit; i++) {
		if (!tasks[i]) {
			break;
		}
		tasksToShow.push(tasks[i]);
	}

	res.json(tasksToShow);
});

export default router;
