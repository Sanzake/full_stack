import http from "node:http"

const data = "Hello world!!!"
const my_server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    const parts = url.pathname.split("/").filter(Boolean)
    const id = parts[1]

    console.log(id)
})

my_server.listen(3000)
console.log("my server listenning...")