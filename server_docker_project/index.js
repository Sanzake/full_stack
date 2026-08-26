import express from "express"
import "dotenv/config"
import homePageRouter from "./routes/home_page.js"
import usersPageRouter from "./routes/users_page.js"
import { initDb } from "./db.js"

const app = express()

app.set("json spaces", 2)

app.use(express.json())

app.use("/home", homePageRouter)
app.use("/users", usersPageRouter)

initDb("users")

app.listen(process.env.PORT, process.env.BASIC_HOST, () => console.log("Listenning..."))
