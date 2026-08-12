p1=fetch("https://jsonplaceholder.typicode.com/users")
p2=fetch("https://jsonplaceholder.typicode.com/photos/1")
Promise.all([p1, p2])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(([users, photo]) => {
    console.log(users)
    console.log(photo)
}
)
.catch(err => console.error(err));
