import express from "express";

const router = express.Router();

const checkApiKey = (req, res, next) => {
	if (!req.headers["x-api-key"]) {
		res.status(401).json();
	} else {
		next();
	}
};

router.get("/", checkApiKey, (_req, res) => {
	res.json("protected");
});

router.get("/time", (req, res) => {
	res.json(req.requestTime);
});

export default router;
