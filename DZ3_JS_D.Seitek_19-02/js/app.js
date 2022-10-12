// ДЗ-3, Задание №1
// let symbol = "";
//     triangleHeight = prompt('What height do you want it to be?');
// for(let i = 0; i < triangleHeight; i++) {
//     symbol += "*";
//     console.log(symbol);    
// }

// ДЗ-3, Задание №2
// 1-ый вариант с if-else
// for(let i = 0; i <= 100; i++) {
//     if((i % 3 === 0 && i % 5 === 0) && i !== 0) console.log(i, 'FizzBuzz');
//     else if(i % 3 === 0 && i !== 0) console.log(i, 'Fizz');
//     else if(i % 5 === 0 && i !== 0) console.log(i, 'Buzz');
// }

// 2-ой вариант с switch-case
for(let i = 0; i <= 100; i++) {
    switch(true) {
        case ((i % 3 === 0 && i % 5 === 0) && i !== 0):
            // console.log(i, 'FizzBuzz'); // отладка
            console.log('FizzBuzz');
            break;
        case (i % 3 === 0 && i !== 0):
            // console.log(i, 'Fizz'); // отладка
            console.log('Fizz');
            break;
        case (i % 5 === 0 && i !== 0):
            // console.log(i, 'Buzz'); // отладка
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }

}

// ДЗ-3, Задание №3
let size = prompt('Choose size');
let line = "";
let newLine = "\n";

for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        line += ((i + j) % 2) === 0 ? "#" : ' ';
    }
    line += newLine;
}
console.log(line);