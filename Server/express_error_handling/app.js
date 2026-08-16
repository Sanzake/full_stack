import express from "express";
import router from "./routes/home.js";

const app = express();

app.use(express.json());
app.use("/home", router);

app.use((err, _req, res, _next) => {
	const status = err.status || 500;
	res.status(status).json({ error: err.message, status: status });
});

const myPort = 3000;
app.listen(myPort, () => {
	console.log("Listening...");
});
