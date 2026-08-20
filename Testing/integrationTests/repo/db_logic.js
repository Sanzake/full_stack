import "dotenv/config";
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	isDone: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", taskSchema);

export const createTask = async (taskTitle, isDone) => {
	const payload = {
		title: taskTitle,
		...(isDone !== undefined && { isDone }),
	};
	const task = await Task.create(payload);

	console.log("Task created!", task.id);
	return task;
};

export const getTasksFromDb = async () => {
	const tasks = await Task.find({});
	return tasks;
};

export const getOpenTasks = async (repo) => {
	const openTasks = await repo.find({ isDone: false });
	return openTasks;
};
