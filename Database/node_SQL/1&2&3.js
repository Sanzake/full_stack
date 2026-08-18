import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({ connectionString: process.env.CONNECTION_STRING });

async function getServerTime() {
	const result = await pool.query("SELECT NOW()");
	return result;
}

const getAllTasks = async () => {
	const result = await pool.query("select * from tasks");
	return result;
};

const getTasksByStatus = async (done) => {
	const result = await pool.query("select * from tasks where done = $1", [
		done,
	]);
	return result;
};

const a = await getServerTime();
const b = await getAllTasks();
const c = await getTasksByStatus("false");

console.log(a.rows[0]);
console.log(b.rows);
console.log(c.rows);
