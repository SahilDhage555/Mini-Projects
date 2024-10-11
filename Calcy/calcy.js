let box = document.querySelectorAll(".box");

let result = document.getElementById("result");

let input = '';
let operator = '';
let num1 = '';

let resetDisplay = false;

let del = document.getElementById("del");
del.addEventListener('click', delet);

box.forEach(btn => {
    btn.addEventListener('click',function () {
        const value = this.value;   

        if(value === 'AC')
        {
            input = '';
            operator = '';
            num1 = '';
            result.innerText = '0';
        }
        else if(value === '=')
        {
            if(operator && input !== '')
            {
                let num2 = input;
                input = calculate(num1,operator,num2);
                result.innerText = input;
                num1 = input;
                input = '';
                operator = '';
            }
        }
        else if(['+','-','*','/'].includes(value))
        {
            if(input !== '')
            {
                if(operator)
                {
                    let num2 = input;
                    input = calculate(num1,operator,num2);
                    num1 = input;
                }
                else
                {
                    num1 = input;
                }
                operator = value;
                resetDisplay = true;
                result.innerText = num1 + ' ' + operator ;
            }
        }
        else
        {
            if(resetDisplay)
            {
                input = value;
                resetDisplay = false;
            }
            else
            {
                input += value;
            }
            if(operator)
            {
                result.innerText = num1 + ' ' + operator + ' ' + input;
            }
            else
            {
                result.innerText = input;
            }
        }
    });
});

function calculate(first,operator,second)
{
    let result;
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch(operator)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '* ':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 0;
    }
    return result.toString();
}

function delet() {
    if (input) {
        input = input.slice(0, -1);
        if (operator) {
            result.innerText = num1 + ' ' + operator + ' ' + input;
        } else {
            result.innerText = input || '0';
        }
    }
}
