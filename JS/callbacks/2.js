function divide(a, b, callback) {
    if (b === 0) {
        return callback("ZeroDivision", undefined)
    }
    
    callback(null, a / b);
}

divide(5, 2, (err, res) => console.log(err, res))