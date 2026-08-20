import assert from "node:assert/strict";
import { describe, mock, test } from "node:test";
import { getOpenTasks } from "../repo/db_logic.js";

describe("getOpenTasks", () => {
	test("Get open tasks from fake repo", async () => {
		const expectedTask = [{ title: "clean", isDone: false }];
		const fakeRepo = { find: mock.fn(async () => expectedTask) };
		const result = await getOpenTasks(fakeRepo);

		assert.deepStrictEqual(result, expectedTask);
		assert.strictEqual(fakeRepo.find.mock.calls.length, 1);
		assert.deepStrictEqual(fakeRepo.find.mock.calls[0].arguments[0], {
			isDone: false,
		});
	});
});
