let bankAccount = {
    balance: 50000,
    accountNumber: '1123040501087239',
    currency: 'USD',
    bankBranch: {
        branchName: 'ОАО Обычный банк',
        branchAddress: 'ул. Уметалиева, 666'
    }
};

let trafficLightSignalColor = prompt('Введите цвет:').toLowerCase();
switch(trafficLightSignalColor) {
    case 'зеленый':
        alert('можно идти');
        break;
    case 'желтый':
        alert('внимание, смена сигналов светофора');
        break;
    case 'красный':
        alert('движение запрещено');
        break;
}

// 1. вариант с использованием цикла и выводом результатов для каждой системы разом
let moneyTransferSystemArray = ['Юнистрим', 'РИА', 'Золотая Корона', 'Контакт'];

for(let moneyTransferSystem of moneyTransferSystemArray) {
    console.log(`Перевод денег через ${moneyTransferSystem}`);
}

// 2. вариант с указанием каждой системы отдельно в переменной
let moneyTransferSystem = 'Юнистрим'; 
// let moneyTransferSystem = 'Золотая Корона';
// let moneyTransferSystem = 'РИА';
// let moneyTransferSystem = 'Контакт';

switch(moneyTransferSystem) {
    case 'Юнистрим':
        console.log('Перевод денежных средств через систему быстрых переводов Юнистрим');
        break;
    case 'РИА':
        console.log('Перевод денежных средств через систему быстрых переводов РИА');
        break;
    case 'Золотая Корона':
        console.log('Перевод денежных средств через систему быстрых переводов Золотая Корона');
        break;
    case 'Контакт':
        console.log('Перевод денежных средств через систему быстрых переводов Контакт');
        break;
    default:
        console.warn('Неизвестная система перевода денежных средств');
        break;
}

// 3. вариант с запросом ввода названия у пользователя
let moneyTransferSystemQuery = prompt('Какой системой Вы хотите осуществить перевод?'); 

switch(moneyTransferSystemQuery) {
    case `${moneyTransferSystemQuery}`:
        console.log(`Перевод денежных средств через систему быстрых переводов ${moneyTransferSystemQuery}`);
        break;
}