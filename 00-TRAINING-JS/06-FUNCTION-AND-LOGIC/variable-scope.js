let variableLet = "global";
var variableVar = "global";

if (true) {

    let variableLet = "local";
    var variableVar = "local";

    console.log("let : " + variableLet);
    console.log("var : " + variableVar);

}

console.log("let : " + variableLet);
console.log("var : " + variableVar);