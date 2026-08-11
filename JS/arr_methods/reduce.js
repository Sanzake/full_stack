const scores = [80, 95, 70, 60]
const average = scores.reduce((sum, n, index, arr) => {
    sum = sum+n
    if (index === arr.length - 1) {
        return sum / arr.length
    }
    return sum
}, 0)


console.log(average)