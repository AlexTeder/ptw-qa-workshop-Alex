const MY_NAME: string = "Alex";
let myMilkAmount: number = 50;
let myCoffeeType: string = "Flat White";


console.log(`Hello, ${MY_NAME} your ${myCoffeeType} with ${myMilkAmount}ml of milk is ready.`);
console.log('Hello, ' + MY_NAME + ' your' +  myCoffeeType + ' with ' + myMilkAmount + ' ml of milk is ready.');

// let myTest: any = "hello";
// myTest = true;
// myTest = 60;

myMilkAmount = 100;

if (myMilkAmount > 50) {
    console.log("Too much milk, not a real coffee!");
}else if (myMilkAmount < 50){
    console.log("Not enough milk, looks like espresso");
}else{
    console.log("Just perfect");
}
//myCoffeeType = "Latte";

if (isTooMuchMilk()) {
    console.log(muchMilkString() + muchMilkResult(false));
} else if (myMilkAmount >= 100) {
    console.log(muchMilkString() + muchMilkResult(true));
} else if (myCoffeeType === "Flat White") {
    console.log("Perfect choice!");
}else {
    console.log("All good, making coffee of your choice");
}

function isTooMuchMilk(): boolean{
    return myMilkAmount > 50 && myCoffeeType !== "Latte"
}

function muchMilkString(): string{
    return "Too much milk,";
}

function muchMilkResult(isNotRealCoffee: boolean):string {
    let result: string = "";
    if (isNotRealCoffee) {
        result = "not a real coffee!";
    } else {
        result = "for other coffee types";
    }
    return result;
}
//same but looks a bit more complex bellow
function muchMilkResult2(isNotRealCoffee: boolean):string {
return isNotRealCoffee ? "not a real coffee!" : "for other coffee types"
}
