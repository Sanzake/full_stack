import express from "express"


const app = express()
app.use(express.json())


app.get("/users/:userId/orders/:orderId", (req, res) => {
    const userID = req.params.userId
    const orderID = req.params.orderId


    res.json({"userID":userID, "orderID":orderID})
    
    console.log("sended!")
})

app.listen(12345, () => console.log("Listening..."))