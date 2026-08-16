import express from "express"


const app = express()
app.use(express.json())


app.get("/products/:id", (req, res) => {
    const id = req.params.id

    res.json({"ProductID": id})
    
    console.log("sended!")
})

app.listen(12345, () => console.log("Listening..."))