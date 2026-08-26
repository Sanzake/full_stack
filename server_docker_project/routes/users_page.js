import express from "express"
import { pool } from "../db.js"
import { getUsersFromDb, addUserToDb } from "../db.js"

const router = express.Router()



router.get("/", getUsersFromDb)
router.post("/", addUserToDb)

export default router