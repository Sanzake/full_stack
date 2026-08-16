import "dotenv/config";

if (!process.env.API_KEY) {
	throw new Error("Missing API_KEY in .env");
}

console.log(process.env.PORT);
