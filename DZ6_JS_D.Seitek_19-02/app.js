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