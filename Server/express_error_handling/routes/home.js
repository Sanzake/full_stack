import express from "express";

const router = express.Router();

const asyncHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

const testing = true;

router.get(
	"/",
	asyncHandler(async (_req, res) => {
		if (testing) {
			const err = new Error("Testing");
			err.status = 499;
			throw err;
		}
		res.json("Basic page...");
	}),
);

router.post(
	"/1337",
	asyncHandler(async (req, res) => {
		if (req.body.code !== "1337") {
			const err = new Error("Invalid input");
			err.status = 400;
			throw err;
		}
		res.json("Congrats!!!");
	}),
);

export default router;
