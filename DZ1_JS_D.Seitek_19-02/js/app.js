// let userSurname = prompt("Enter your surname: ");
//     userName = prompt("Enter your name: ");
//     userFullname = userSurname + ' ' + userName;

// alert("Здравствуйте, " + userFullname);


let firstNumberInput = +prompt("Enter first number: ");
    secondNumberInput = +prompt("Enter second number: ");

// if(firstNumberInput > secondNumberInput)
//     console.log('Первое число больше второго');
// else if(firstNumberInput < secondNumberInput)
//     console.log('Второе число больше первого');
// else
//     console.log('Числа равны');

let isEven = firstNumberInput === secondNumberInput;
    isFirstBigger = firstNumberInput > secondNumberInput;
    isSecondBigger = firstNumberInput < secondNumberInput;
    
    comparisonResult = 
            isEven 
            ? 'Оба числа равны' 
            : isFirstBigger 
            ? 'Первое число больше второго' 
            : isSecondBigger 
            ? 'Второе число больше первого'
            : 'Конец';

console.log(comparisonResult);
console.log(typeof firstNumberInput, typeof secondNumberInput) // тип данных number