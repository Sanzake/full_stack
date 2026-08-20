import express from "express";
import {
	createTask,
	getOpenTasks,
	getTasksFromDb,
	Task,
} from "../repo/db_logic.js";

const router = express.Router();

router.get("/", async (req, res) => {
	if (req.query.isDone !== undefined) {
		const openTasks = await getOpenTasks(Task);
		return res.status(200).json(openTasks);
	}
	const tasks = await getTasksFromDb();
	return res.status(200).json(tasks);
});

router.post("/", async (req, res) => {
	try {
		const { title, isDone } = req.body;

		const task = await createTask(title, isDone);

		return res.status(201).json(task);
	} catch (err) {
		return res.status(400).json(err);
	}
});

export default router;
