import express from "express";
import router from "./routes/products.js";

const PORT = 3000;
const app = express();

app.set("json spaces", 2);

app.use(express.json());
app.use((err, _req, res, next) => {
	if (err instanceof SyntaxError) {
		return res.status(400).json({
			status: "error",
			code: "BAD_JSON_FORMAT",
			message: "Invalid json! Syntax error!",
		});
	}
	next();
});

app.use("/products", router);

app.listen(PORT, () => {
	console.log("Listenning...");
});
