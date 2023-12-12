const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }

    numbers = [];
    let sum = 0;
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            numbers.push(i);
        }
        for (let n = 0; n < numbers.length; n++){
            sum += numbers[n];
        }
        return sum;
    }
    else {
        for (let i = num2; i <= num1; i++){
            numbers.push(i);
        }
        for (let n = 0; n < numbers.length; n++){
            sum += numbers[n];
        }
        return sum;
    };
};



console.log(sumAll(1, '15'));

// Do not edit below this line
module.exports = sumAll;
