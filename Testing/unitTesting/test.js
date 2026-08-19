import assert from "node:assert";
import { describe, test } from "node:test";
import { _add as add, _divide as divide } from "./app.js";

describe("add", () => {
	test("add two numbers", () => {
		assert.strictEqual(add(3, 8), 11);
	});
	test("add negative numbers", () => {
		assert.strictEqual(add(-7, 3), -4);
	});
});

describe("divide", () => {
	test("throw error while divide on zero", () => {
		assert.throws(() => {
			divide(7, 0);
		});
	});
	test("divide two numbers", () => {
		assert.strictEqual(divide(5, 2), 2.5);
	});
});
