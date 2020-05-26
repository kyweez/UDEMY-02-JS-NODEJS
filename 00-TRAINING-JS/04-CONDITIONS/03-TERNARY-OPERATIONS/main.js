let x = 1;

//CONDITION TERNAIRE
x > 3 ? console.log('X est supérieur à trois') : console.log('X est inférieur à trois');

if(x > 3) {
    console.log('X est supérieur à trois');
}
else {
    console.log('X est inférieur à trois');
}

//TRAIN

let departure = "Berlin";
let arrival = prompt("Où souhaitez-vous aller ?") || "Rome";
let driver    = "kyweez";

if ((departure != "" || arrival != "") && driver != "") {
    alert('Le train va démarrer à destination de ' + arrival + '.');
}
else {
    alert('Le train ne peut pas démarrer.');
}