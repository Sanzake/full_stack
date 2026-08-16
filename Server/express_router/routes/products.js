import express from "express"


const productList = ["a", "b", "c"]

const router = express.Router()

router.get("/", (req, res) => {
    res.json(productList)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    res.json(id)
})

router.post("/", (req, res) => {
    const productName = req.body.name
    res.json(productName)
})

export default router