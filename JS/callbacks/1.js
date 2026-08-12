const arr = [1,2,3,4,5,1337]

function processArray(arr, callback) {
    for (const item of arr) {
        callback(item)
    }
}

processArray(arr, n => console.log(n ** 2))