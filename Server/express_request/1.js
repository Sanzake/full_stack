import express from "express"


const app = express()
app.use(express.json())


app.post("/echo", (req, res) => {
    const data = req.body
    console.log(data)
    res.json(data)
}) 

app.listen("12345", () => console.log("Listening..."))