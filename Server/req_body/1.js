import http from "node:http"


const readBody = (req) => {
    return new Promise((resolve, reject) => {
        let raw = ""
        let chunkCount = 0
        req.on("data", chunk => {
            raw += chunk
            chunkCount += 1
            console.log(`chunk${chunkCount} - ${chunk.length}`)
        })

        req.on("end", () => {
            try {
                resolve(JSON.parse(raw))
            } catch(err) {
                reject(err)
            }
        })
    })
}


const server = http.createServer(async (req, res) => {
    if (req.method === "POST") {
        try {
            const body = await readBody(req);
            console.log(body.name)

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ received: body }));
        } catch(err) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Invalid JSON format" }));
        }
    } else {
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not known method!" }));
    }
});


server.listen(3000, () => {console.log("Server are listen...")})