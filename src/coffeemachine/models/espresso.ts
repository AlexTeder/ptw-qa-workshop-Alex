import {Coffee} from "./coffee";
import {AlcoType} from "../enums/alco-type";

export class Espresso extends Coffee{

    constructor(inputAmount: number,
                inputTemperature:number,
                inputIce1:boolean,
                inputMilk:number,
                inputHasAlco:boolean,
                inputAlcoAmount: number,
                inputAlcoType:AlcoType) {
        super(inputAmount, inputTemperature, inputIce1, inputMilk,
            inputHasAlco, inputAlcoAmount, inputAlcoType);
    }
}

