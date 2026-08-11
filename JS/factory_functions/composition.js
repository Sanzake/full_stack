const canFly = {fly: () => "flying"}
const canSwim = {swim: () => "swimming"}


const duck = {...canSwim, ...canFly}


console.log(duck.fly(), duck.swim())