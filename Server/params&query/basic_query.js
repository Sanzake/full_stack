import express from "express"


const app = express()
app.use(express.json())


app.get("/search", (req, res) => {
    const term = req.query.term
    const page = req.query.page || 1


    res.json({"term":term, "page":page})
    
    console.log("sended!")
})

app.listen(12345, () => console.log("Listening..."))