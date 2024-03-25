import {Espresso} from "../models/espresso";
import {Coffee} from "../models/coffee";
import {Capuchino} from "../models/capuchino";
import {AlcoType} from "../enums/alco-type";

export class coffeeMachineService {
    public static makeEspresso(inputAmount:number,
                               inputIce1:boolean): Espresso {
        return new Espresso(inputAmount,
            90,
            inputIce1,
            0,
            false,
            0,
            null);
    }

    public static makeCappuccino(inputAmount:number,
                                 inputIce1:boolean,
                                 inputHasAlco:boolean,
                                 inputAlcoAmount:number,
                                 inputAlcoType:AlcoType,
                                 inputFloamingTime:number): Capuchino {
        const inputMilk = inputAmount * 0.3
        return new Capuchino(inputAmount, 87, inputIce1, inputMilk,
            inputHasAlco, inputAlcoAmount, inputAlcoType, inputFloamingTime);
    }

    public static makeCoffee(inputAmount: number,
                             inputTemperature:number,
                             inputIce1:boolean,
                             inputMilk:number,
                             inputHasAlco:boolean,
                             inputAlcoAmount: number,
                             inputAlcoType:AlcoType): Coffee {
        if (inputAmount - inputMilk  < 20) {
            console.log("Too much milk, looks like serial!");
            return null;
        }
        if (inputTemperature > 98) {
            console.log("You are burning your coffee beans!")
            return null;
        }
        return new Coffee(inputAmount, inputTemperature, inputIce1, inputMilk,
            inputHasAlco, inputAlcoAmount, inputAlcoType);
    }
    //static allows us not to populate instances of a class, we can just operate with the functionality.
}