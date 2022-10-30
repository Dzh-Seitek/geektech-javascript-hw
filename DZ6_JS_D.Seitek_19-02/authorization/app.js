let namesArr2 = ["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"];

const divNode = document.querySelector('.registration-cssave');
const loginNode = divNode.querySelector('.username');
const passwordNode = divNode.querySelector('.password');
const submitBtnNode = divNode.querySelector('.btn');

submitBtnNode.addEventListener('click', e => {
    for(let i = 0; i < namesArr2.length; i++) {
        if(loginNode && loginNode.value.toLowerCase() === namesArr2[i].toLowerCase()) {
            alert(`You've logged as ${namesArr2[i]}`);
            break;
        } else if (loginNode.value.length === 0){
            alert('Entry cannot be empty');
            break;
        } else {
            alert('No matches found');
            break;
        }
    }
})