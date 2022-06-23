const num1 = parseFloat(prompt("Enter first number"));
        const operator = prompt('Enter operator(+, -, *, /)');
        const num2 = parseFloat(prompt("Enter second number"));

        let output = 0;

        if(isNaN(num1) || isNaN(num2)){
            alert('Invalid entry');
        } else{
            if(operator == '+'){
            output = num1 + num2;
        }else if(operator == '-'){
            output = num1 - num2;
        }else if(operator == '*'){
            output = num1 * num2;
        }else if(operator == '/'){
            output = num1 / num2;
        }
        
        alert('answer =' + ' ' + output)
        }
