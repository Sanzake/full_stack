import express from "express"

const router = express.Router()

const getHomePage = (req, res) => {
    res.json("Hello from home page!!!")
}

router.get("/", getHomePage)

export default router