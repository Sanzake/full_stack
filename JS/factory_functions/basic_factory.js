function makeCar(brand, model) {
    return {brand, model, describe() {return `${brand} - ${model}`}
}
    }

const car1 = makeCar("porche", "cayene")
console.log(car1.describe())