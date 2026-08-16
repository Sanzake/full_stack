import express from "express"
import router from "./routes/products.js"
import ordersRouter from "./routes/orders.js"


const myPort = 3000
const app = express()

app.use(express.json())
app.use("/products", router)
app.use("/orders", ordersRouter)

app.listen(myPort, () => {console.log("Listening...")})