function makeTimer() {
    let seconds = 0
    return {tick() {seconds++}, getSeconds: () => seconds}
}


t = makeTimer()
console.log(t.getSeconds())

t.tick()
t.tick()
t.tick()
console.log(t.getSeconds())

t.tick()
console.log(t.getSeconds())
