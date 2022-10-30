// function User(username, login, password) {
//     this.Username = username;
//     this.Login = login;
//     this.Password = password;
// }
// let user = new User('John', 'QWERTY', '1234567890');
// console.log(user);

// let namesArr = ["evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"];
//     capitalizedNamesArr = namesArr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// console.log(capitalizedNamesArr);

// let mixedPinArr = ["00101202215478","qwerty","125042000000258","79451789841256","21010199578143","01234567891234","249489","21702200214789"];
//     pinFirstNum = [0, 1, 2];
//     filteredPinArr = mixedPinArr.filter(pin => (+pin && (+pin.length === 14 && +pinFirstNum.includes(+pin[0]))));
// console.log(`Валидные ИНН: ${filteredPinArr}`);

// let namesArr2 = ["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"];
//     result = namesArr2.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
// console.log(`Самое длинное имя в массиве: ${result}`);


const divNode = document.querySelector('.main-block');
const btnNode = document.querySelectorAll('button');
let countNode = document.querySelector('.count');

function increaseOrDecreaseCounter(buttonArr, counter) {
    buttonArr.forEach(function(button, id) {
        button.addEventListener('click', (e) => {
            if (e.target.className === 'lower' && counter.textContent > 0) {
                counter.textContent--;
            } else if (e.target.className === 'add') {
                counter.textContent++;
            } else {
                return;
            }
        })
    })
}

increaseOrDecreaseCounter(btnNode, countNode);