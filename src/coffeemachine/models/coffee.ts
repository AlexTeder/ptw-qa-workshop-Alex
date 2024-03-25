
import {AlcoType} from "../enums/alco-type";
import {Drink} from "./drink";

export class Coffee extends Drink{
    amountOfMilk1: number;
    hasAlco:boolean
    alcoAmount:number; //num of drops
    alcoType:AlcoType;

    constructor(inputAmount: number,
                inputTemperature:number,
                inputIce1:boolean,
                inputMilk:number,
                inputHasAlco:boolean,
                inputAlcoAmount: number,
                inputAlcoType:AlcoType) {

        super(inputAmount, inputTemperature, inputIce1);
        //super -> drink.constructor
        this.amountOfMilk1 = inputMilk;
        this.checkAlco(inputHasAlco,inputAlcoAmount,inputAlcoType)
    }
    // || == "OR"
        private checkAlco(inputHasAlco: boolean,
    inputAlcoAmount:number,
    inputAlcoType:AlcoType): void {

        // if (inputHasAlco === true) {}
        // if (inputHasAlco) {}
        // if (inputHasAlco === false)
        // if (inputHasAlco === false || inputHasAlco === null) {}
        // if (!inputHasAlco) {}

            if (inputHasAlco && inputAlcoAmount < 1 || !inputHasAlco && inputAlcoAmount > 0) {
                console.log("Incorrect alco input, settings no alco");
                this.hasAlco = false;
                this.alcoAmount = 0;
                this.alcoType = null;
            } else if (inputHasAlco && inputAlcoAmount < 5) {
                this.hasAlco = inputHasAlco;
                this.alcoAmount = 5;
                this.alcoType = inputAlcoType;
            } else if (inputHasAlco && inputAlcoAmount > 0){
                    this.hasAlco = inputHasAlco;
                    this.alcoAmount = inputAlcoAmount;
                    this.alcoType = inputAlcoType;
                }
            // else if (!inputHasAlco && inputAlcoAmount > 0 ) {
                //     this.hasAlco = false;
                //     this.alcoAmount = 0;
                //     this.alcoType = null;
                // }
            }
}