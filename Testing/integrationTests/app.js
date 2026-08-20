import express from "express";
import mongoose from "mongoose";
import router from "./routes/tasks.js";

const app = express();

app.use(express.json());

await mongoose.connect(process.env.MONGODB_URI);
console.log("DB connected!");

app.use("/tasks", router);

export default app;
