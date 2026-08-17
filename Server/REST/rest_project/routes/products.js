import express from "express";

class Product {
	constructor(id, name, price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

const products = { 1: new Product(1, "pen", 10), 2: new Product(2, "bag", 60) };
const router = express.Router();

router.get("/", (req, res) => {
	const page = req.query.page || 1;
	const limit = req.query.limit || 10;

	const productsValues = Object.values(products);
	const productsToShow = [];

	for (let i = (page - 1) * limit; i < page * limit; i++) {
		if (!productsValues[i]) {
			break;
		}
		productsToShow.push(productsValues[i]);
	}

	res.json(productsToShow);
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
	if (!products[id]) {
		res.status(404);
		// ??? return
	}
	res.json(products[id]);
});

router.post("/:id", (req, res) => {
	const id = req.params.id;

	// TODO: maybe add middleware
	if (req.body.name === undefined || req.body.price === undefined) {
		res.status(400).json({
			status: "error",
			code: "BAD_REQUEST",
			message: "Incomplete json. There is no name or price!",
		});
		return;
	}
	// TODO: maybe add middleware
	if (products[id]) {
		res.status(409).json({
			status: 409,
			error: "Conflict",
			message: `This id(${id}) arleady in use`,
		});
		return;
	}

	const name = req.body.name;
	const price = req.body.price;

	products[id] = new Product(id, name, price);
	res.sendStatus(201);
});

router.put("/:id", (req, res) => {
	const id = req.params.id;
	// TODO: maybe add middleware
	if (!products[id]) {
		res.status(404).json({
			status: 404,
			error: "NOT_FOUND",
			message: `This id(${id}) not found in the data`,
		});
		return;
	}
	// TODO: maybe add middleware
	if (req.body.name === undefined || req.body.price === undefined) {
		res.status(400).json({
			status: "error",
			code: "BAD_REQUEST",
			message: "Incomplete json. There is no name or price!",
		});
		return;
	}

	const name = req.body.name;
	const price = req.body.price;

	products[id] = new Product(id, name, price);

	res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
	const id = req.params.id;
	// TODO: maybe add middleware
	if (!products[id]) {
		res.status(404).json({
			status: 404,
			error: "NOT_FOUND",
			message: `This id(${id}) not found in the data`,
		});
		return;
	}

	delete products[id];
	res.sendStatus(204);
});

export default router;
