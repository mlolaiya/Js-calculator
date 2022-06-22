
/* Declaring variable */
var num1 = prompt('Enter first number');
var Oprtr = prompt('Select Operation to perform +, -, *, /'); //Operators
var num2 = prompt('Enter second number');

//I use switch to set out the conditions
switch(Oprtr)  
{
    case '+':
        var result = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '-':
        var result = parseFloat(num1) - parseFloat(num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case '*':
        var result = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;  
    case '/':
        var result = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break; 
    case '/':
        var result = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break; 
    default:
        console.log('Invalid Operator')
}

/* alert(''); */