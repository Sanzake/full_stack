import express from "express"


const app = express()

app.get("/", (req, res) => {
    res.json({"message": "Hello express!"})
})

app.get("/contact", (req, res) => {
    res.json({"message": "Contact page"})
})

app.get("/about", (req, res) => {
    res.json({"message": "About page"})
})

app.get("/items", (req, res) => {
    res.json({"message": "Items page"})
})

app.post("/items", (req, res) => {
    res.json({"message": "Items page post posted"})
})

app.listen(12345, () => console.log("Listenning..."))