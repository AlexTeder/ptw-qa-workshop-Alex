export abstract class Drink {
    //fields
    //hasIce1:boolean;
    //hasSugar:boolean;
    hasIce1:boolean;
    amount1:number;
    temperature:number;

    //construction definition
    constructor(inputAmount: number,
                inputTemperature:number,
                inputIce1:boolean ) {
        this.amount1 = inputAmount;
        this.temperature = inputTemperature;
        this.hasIce1 = inputIce1;
    }
    //methods (behavior)
}