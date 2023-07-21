const randomNum = Math.round(Math.random() * 100);
console.log('randomNum: ', randomNum);

let userNum = 0;

while (userNum != randomNum) {

    let userNum = prompt('Введите число от 0 до 100')
    console.log('userNum: ', userNum);
    console.log(typeof userNum);

    if (userNum === null) {
        alert('Отмена')
        break;
    } else if (userNum == randomNum) {
        const answ4 = alert('Правильно!')
        break;
    
    } else if (randomNum < userNum) {
        const answ2 = alert('Меньше!')

    } else if (userNum < randomNum) {
        const answ3 = alert('Больше!')

    } else if (typeof userNum !== 'number') {
        const answ1 = alert('Введите число!')
        
    }
}