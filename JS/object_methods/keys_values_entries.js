const car = { brand: "Toyota", year: 2022 }


console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))


const updatedCar = {car, year: 2023}

console.log(car.year)
console.log(updatedCar.year)

console.log("color" in car)
car.color = "red"
console.log("color" in car)