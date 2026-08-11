function makeCounter() {
  let count = 0;
  return () => ++count;
}

const counter = makeCounter();
const counter1 = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter1())

console.log(counter.count)
//count is private because it isnt property of counter object