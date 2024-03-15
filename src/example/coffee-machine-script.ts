// Ex. 1: declare variables and use them
let milkAmount: number = 50
let coffeeAmount: number = 100
let hasSyrup: boolean = true
let hasIce: boolean = true

console.log(`Preparing coffee ${coffeeAmount} ml with ${milkAmount} ml of milk`)

// Ex. 1.1: declare const variable and demonstrate
milkAmount = 150 // works ok, because let
const waterAmount: number = 100
//waterAmount = 200 // does not work, because const


// Ex. 2: create conditional statements
if (hasSyrup && hasIce) {
  console.log(`Preparing iced coffee ${coffeeAmount} ml with ${milkAmount} ml with syrup`)
} else if (hasIce) {
  console.log(`Preparing iced coffee ${coffeeAmount} ml with ${milkAmount} ml`)
} else if (hasSyrup) {
  console.log(`Preparing coffee ${coffeeAmount} ml with ${milkAmount} ml with syrup`)
}


let coffeeTotalAmount: number = 150
if (milkAmount + coffeeAmount > coffeeTotalAmount) {
  console.log("Cannot make coffee, total amount is less that requested ingredients!")
} else {
  console.log("All good, making your coffee!")
}

milkAmount = 100
if (milkAmount + coffeeAmount > coffeeTotalAmount) {
  console.log("Cannot make coffee, total amount is less that requested ingredients!")
} else {
  console.log("All good, making your coffee!")
}

// Ex. 3: create loops
const numOfOrders: number = 5
for (let i = 1; i <= numOfOrders; i++) {
  console.log(`Preparing coffee nr. ${i} ${coffeeAmount} ml with ${milkAmount} ml of milk`)
}

const coffeeAmounts: number[] = [100, 150, 200]
for (const amount in coffeeAmounts) {
  console.log(`Preparing coffee ${amount} ml`)
}