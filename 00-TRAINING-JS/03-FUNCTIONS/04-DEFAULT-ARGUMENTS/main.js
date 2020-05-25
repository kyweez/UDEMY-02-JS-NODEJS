
function cook(cakeNumber, prepTime = 10, cooking = 15) {

    let result = cakeNumber * (cooking + prepTime);
    return result;

}

let chocolatePrepTime = cook(4);
let berriesPrepTime = cook(1, 20);
console.log(berriesPrepTime + chocolatePrepTime);