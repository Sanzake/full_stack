import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";
import mongoose from "mongoose";
import request from "supertest";
import app from "../app.js";
import { Task } from "../repo/db_logic.js";

describe("Tasks API (/tasks)", () => {
	beforeEach(async () => {
		await Task.deleteMany({});
	});

	after(async () => {
		await mongoose.connection.close();
	});

	describe("GET /tasks", () => {
		test("GET a empty arr when tasks is empty", async () => {
			const res = await request(app).get("/tasks");

			assert.strictEqual(res.status, 200);
			assert.deepStrictEqual(res.body, []);
		});
	});

	describe("POST /tasks", () => {
		test("Create new task with default isDone == false", async () => {
			const payload = { title: "Work hard" };

			const res = await request(app)
				.post("/tasks")
				.send(payload)
				.set("Content-Type", "application/json");

			assert.strictEqual(res.status, 201);
			assert.strictEqual(res.body.title, "Work hard");
			assert.strictEqual(res.body.isDone, false);

			const tasksDB = await Task.find({});

			assert.strictEqual(tasksDB.length, 1);
			assert.strictEqual(tasksDB[0].title, payload.title);
			assert.strictEqual(tasksDB[0].isDone, false);
		});
	});
});
