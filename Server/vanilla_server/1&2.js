import http from "node:http"

const data = "Hello world!!!"
const my_server = http.createServer((req, res) => {
    res.writeHead(201, {"Content-type": "application/json"})
    res.end(data)

    console.log(`Responsed to ${req.socket.remotePort}`)
})

my_server.listen(3000)
console.log("my server listenning...")