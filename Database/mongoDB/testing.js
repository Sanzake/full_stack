import { MongoClient } from "mongodb";

const client = new MongoClient(
	"mongodb+srv://danhab20_db_user:1234@cluster0.nbbanfp.mongodb.net/",
);

await client.connect();

const db = client.db("users");
const users = db.collection("users");

const a = await users.find().toArray();
console.log(a[0]);
