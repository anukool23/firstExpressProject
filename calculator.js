const crypte = require("crypto")

const args = process.argv.slice(2);

function calculator(operation, ...numbers){
    let result
    switch(operation){
        case 'add':
            result = numbers.reduce((acc, num)=>acc+Number(num),0);
            break;

        case 'sub':
            result = numbers.reduce((acc,num)=>acc-Number(num));
            break;

        case 'mul':
            result = numbers.reduce((acc,num)=>acc*Number(num),1);
            break;

        case 'div':
            result = numbers.reduce((acc,num)=>acc/Number(num));
            break;

        case 'sin':
            if(numbers.length !== 1){
                console.log('Please provide one argument for sin operation.');
                return;
            }
            result = Math.sin(Number(numbers[0]));
            break;
    }

    console.log(`result ${result}`)

}

const [operation, ...numbers] = args;

calculator(operation, ...numbers);