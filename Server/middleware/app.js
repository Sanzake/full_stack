import express from "express";
import router from "./routes/protected.js";

const myPort = 3000;
const app = express();

const logger = (req, _res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
};

const addTimestamp = (req, _res, next) => {
	req.requestTime = Date.now();
	next();
};

app.use(logger);
app.use(addTimestamp);
app.use(express.json());

app.use("/protected", router);

app.get("/", (_req, res) => {
	res.json("hello");
});

app.listen(myPort, () => {
	console.log("Listening...");
});
