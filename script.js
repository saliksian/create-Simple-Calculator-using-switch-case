let number1 = parseFloat(prompt("Enter 1st number"))
let operator = prompt("Enter operator")
let number2 = parseFloat(prompt("Enter 2nd number"))
let result=0;
switch (operator) {
    case '+':
        result = number1+number2;
        console.log(number1+ " + "+number2+" = "+ result)
        break;
    case '-':
        result = number1-number2;
        console.log(number1+ " - "+number2+" = "+ result)
        break;
    case '*':
        result = number1*number2;
        console.log(number1+ " * "+number2+" = "+ result)
        break;
    case '/':
        result = number1/number2;
        console.log(number1+ " / "+number2+" = "+ result)
        break;

    default:
        console.log("Enter valid input!!");
        break;
}