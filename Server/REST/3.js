import express from "express";
import router from "./routes/tasks.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/tasks", router);

app.listen(PORT, () => {
	console.log("Listenning...");
});
