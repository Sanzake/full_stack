import { _add as add } from "./app.js";

const rightTestAdd = () => {
	if (add(3, 9) === 11) {
		return "OK";
	} else {
		throw new Error("FALSE");
	}
};

const falseTestAdd = () => {
	if (add(3, 8) !== 11) {
		return "FALSE";
	} else {
		return "OK";
	}
};

const testAdd = () => {
	console.log(rightTestAdd());
	console.log(falseTestAdd());
};

testAdd();
