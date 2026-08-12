import http from "node:http"

const data = "Hello !!!"
const my_server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(data)
    }
    else {
        res.writeHead(404)
        res.end()
    }

    console.log(`Responsed to ${req.socket.remotePort}`)
})

my_server.listen(3000)
console.log("my server listenning...")