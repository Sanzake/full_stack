async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await res.json()
        return users
    } catch (error){
        console.error(error)
        throw error
    }
}

getUsers().then(users => console.log(users))