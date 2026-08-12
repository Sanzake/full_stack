async function getData() {
    try {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const photo = await (await fetch("https://jsonplaceholder.typicode.com/photos/1")).json()
    return [users, photo]
    } catch (error){
        console.error(error)
        throw error
    }
}


console.time('sequental')
getData().then(([users, photo]) => {
    console.timeEnd("sequental")
})


async function getDataAll() {
    try {
        const [users, photo] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/photos/1").then(res => res.json())
        ])
        
        return [users, photo]
    } 

    catch (error) {
        console.error(error)
        throw error
    }
}

console.time("parallel")
getDataAll().then(([users, photo]) => {console.timeEnd("parallel")})
