const regex = /(^[a-zA-Z]{5,11}ion$)|(^[1-4]{1}$)|(^[1-4]{1} - [a-zA-Z]{5,11}ion$)/
let operation;
let calculChoice;
let number1;
let number2;

function askNumber(){
    do {
        inputNumber = prompt(`Insert a number`);        
        try {
            if (inputNumber == null || inputNumber == "")
                askNumber();
            if (!inputNumber.match(/^(-{1})?[0-9]+$/))
                throw new Error("Bad input, try again...");
            else
                return (inputNumber);
        }
        catch (error) {
            alert(error);
        }
    } while (!inputNumber.match(regex))
}

function calculType() {
    do {
        operation = prompt(`What do you want to do ?\n`
                        + `\n1 - Addition`
                        + `\n2 - Substraction`
                        + `\n3 - Multiplication`
                        + `\n4 - Division`);        
        try {
            if (operation == null || operation == "")
                calculType();
            if (!operation.match(regex))
                throw new Error("Bad input, try again...");
            if (operation.toLowerCase().match(/^[a-zA-Z]{5,11}ion$/)) {
                switch (operation) {
                    case `addition`:
                        return(1);
                    case `substraction`:
                        return (2);
                    case `multiplication`:
                        return (3);
                    case `Division`:
                        return (4);
                }
            }
            else
                return (operation);
        }
        catch (error) {
            alert(error);
        }
    } while (!operation.match(regex))
}

calculChoice = Number(calculType());
number1 = Number(askNumber());
number2 = Number(askNumber());

alert (number1);
alert(number2);