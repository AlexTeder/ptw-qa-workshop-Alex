const DRINK_TYPES : string[] = ["Coffee", "Cola", "Beer","Kvas","Tee","Water"]

for (const index in DRINK_TYPES) {
    console.log(index + ":" + DRINK_TYPES[index]);
}

for (const drink of DRINK_TYPES) {
    console.log(DRINK_TYPES.indexOf(drink) + "-" + drink);
}

for (let i = 0; i <= DRINK_TYPES.length -1; i++) {
    console.log(i);
    console.log(DRINK_TYPES[i]);
}

for (let i = 0; i <= DRINK_TYPES.length -1; i+= 2) {
    console.log(i);
    console.log(DRINK_TYPES[i]);
}

let stringData: string[] = [];
for (let s: string = "a"; stringData.length <= 5; s+= 'P'){
    stringData.push(s);
}
console.log(stringData);
//[ 'a', 'aP', 'aPP', 'aPPP', 'aPPPP', 'aPPPPP' ]