// ВМЕСТО: const { Pool } = require('pg');
import pkg from "pg";

const { Pool } = pkg;

// Настройки подключения остаются прежними
const pool = new Pool({
	user: "db_user",
	host: "localhost",
	database: "my_db",
	password: "secret_password",
	port: 5432,
});

// Пример асинхронной функции для запроса
async function getUsers() {
	try {
		const res = await pool.query("SELECT * FROM users");
		console.log(res.rows);
	} catch (err) {
		console.error(err);
	}
}

getUsers();
