import http from "node:http"

const data = "Hello world!!!"
const my_server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    const id = url.pathname.split("/").filter(Boolean)

    const term = url.searchParams.get("term")
    const page = url.searchParams.get("page")
    const sort = url.searchParams.get("sort")

    console.log(term)
    console.log(page)
    console.log(sort)
})

my_server.listen(3000)
console.log("my server listenning...")