const myJSON = "{badjson}";

try {
	JSON.parse(myJSON);
} catch (err) {
	console.log(err);
}

class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.status = 404;
	}
}

try {
	throw new NotFoundError("not found");
} catch (err) {
	console.log(err.status);
	console.log(err.message);
	console.log(err.name);
} finally {
	console.log("clearing...");
}
