function getMinValue(a, b) {
    return a < b ? `minimum value is: A - ${a}` : `minimum value is: B - ${b}`;
}

console.log(getMinValue(5, 10));
console.log(getMinValue(10, 5));

function convertToArray(args) {
    let arrayOfArgs = [];
    for(let value in args) {
        arrayOfArgs.push(args[value]);
    }
    return arrayOfArgs;
}

function getMinValueFromMultiple() {
    convertToArray(arguments);
    let minimum = convertToArray(arguments[0]);
    for(let value of arguments) {
        if(minimum > value) {
            minimum = value;
        }
    }
    return `minimum value is: ${minimum}`;
}
console.log(getMinValueFromMultiple(-100, -1, 10, -20, 300, -999));


function countLetterEntries(word, letter) {
    let letterOccurrence = 0;
    word.toLowerCase().split('').map(function(element, index) {
        if(element === letter) {
            letterOccurrence++;
        }
    })
    return letterOccurrence;
}
console.log('Letter occurs:', countLetterEntries('I believe I can fly, I believe I can touch the sky', 'e'), 'times');


function findAverage() {
    let arr = convertToArray(arguments);
    let count = convertToArray(arguments).length;
    return arr.reduce((accumulator, current) => accumulator + current) / count;
}
console.log('Average number is: ', findAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


function returnFilteredNumbers() {
    convertToArray(arguments);
    let arr = convertToArray(arguments);
    let filteredNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 5) {
            filteredNumbers.push(arr[i]);
            console.log(arr[i]);
        }
    }
    return filteredNumbers;
}
console.log(returnFilteredNumbers(100, 9, 2, -100, -20, 5, 6, 11, 1, 8*5));

function validatePin(pin) {
    let arr = (typeof pin === 'string' ? pin.split('') : String(pin).split(''));
    for(let item of arr) {
        if(typeof arr[item] === 'string') {
            arr[item] = +arr[item];
        }
        console.log(typeof arr[item]);
    }
    return (arr.length === 14 && (arr[0] === 0 || arr[0] === 1 || arr[0] === 2)) ? 'PIN is valid' : 'PIN is invalid';
}
console.log(validatePin("22110199610128"));

function reverseSentence(sentence) {
    let reversedSentence = '';
    for(let i = sentence.length-1; i >= 0; i--) {
        reversedSentence += sentence[i];
    }
    return reversedSentence;
}

console.log(reverseSentence('javascript'));