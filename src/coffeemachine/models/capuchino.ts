import {Coffee} from "./coffee";
import {AlcoType} from "../enums/alco-type";

export class Capuchino extends  Coffee {
    foamingTime: number; // in seconds

    constructor(inputAmount: number,
                inputTemperature:number,
                inputIce1:boolean,
                inputMilk:number,
                inputHasAlco:boolean,
                inputAlcoAmount: number,
                inputAlcoType:AlcoType,
                inputFoamingTime:number,) {
        super(inputAmount, inputTemperature, inputIce1, inputMilk,
            inputHasAlco, inputAlcoAmount, inputAlcoType); //keep the order
        //check from coffee.constructor(); super class, it expects 7 arguments to be in super()
        this.foamingTime = inputFoamingTime;
    }
}