import pg from "pg"
import "dotenv/config"

const Pool = pg.Pool

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

export const initDb = async () => {
    const queryInit = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT);
    `
    let retries = 10
    while (retries > 0) {
        try {
            await pool.query(queryInit)
            console.log("Table 'users' initialised!")
            return
        } catch {
            retries -= 1
            console.error("Not ready! Wait!")
            if (retries === 0) {
                console.error("Error! Cannot initialise table!")
                process.exit(1)
            }
            setTimeout(() => console.log("123"), 2000);
        }
    }
}

export const getUsersFromDb = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users;")
        res.status(200).json(users.rows)
    } catch (err) {
        console.error("Error! Cannot get rows!", err)
        res.status(500).json({ error: "Cannot get rows" })
    }
}

export const addUserToDb = async (req, res) => {
    const name = req.body?.name
    const email = req.body?.email

    const queryText = `INSERT INTO users (name, email) VALUES ($1, $2);`

    try {
        await pool.query(queryText, [name, email])
        res.status(201).json("Row created!")
    } catch (err) {
        console.error("Error! Cannot create row!", err)
        res.status(500).json("Error! Cannot create row!")
    }
}