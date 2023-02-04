let newArr= [];
let xNum = 1;

for(let i = 0; i < xNum; i++) {
    newArr.push;

    let elNum = prompt('Введіть довжину масиву');

    for(let x = 0; x < elNum; x++) {
        let elem = prompt('Введіть елемент масиву');
        newArr.push(elem);
    }
    console.log(newArr);
}


function defineAverage() {
    let numbers = newArr.filter(Number);

    for (var i = 0; i < numbers.length; i++) {
        numbers[i] *= 1;
    }
    console.log(numbers)

    let sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length
}
console.log(defineAverage());


/*
* 1. Дано масив з елементами різних типів. Створити функцію яка вираховує
* середнє арифметичне лише числових елементів даного масиву.
*/
// const array = [1, 2, 'string', 4, 5, 'Petro', true];
// // Перший підхід
// function calcAverage(arr) {
//     let sum = 0;
//     let count = 0;
//     // цикл по масиву
//     for (let i = 0; i < arr.length; i++) {
//         // перевіряємо, що елемент number
//         if (typeof arr[i] === 'number') {
//             // рахуємо кількість елементів та їх суму
//             count = count + 1;
//             sum = sum + arr[i];
//         }
//     }
//     // вертаємо середнє значення
//     return sum / count;
// }
// // Другий підхід
// function calcAverage2(arr) {
//     let sum = 0;
//     // спочатку фільтруємо масив і залишаємо лише number
//     const arrNumber = arr.filter(item => typeof item === 'number');
//     // проходимо циклом і сумуємо всі елементи
//     for(const element of arrNumber) {
//         sum = sum + element;
//     }
//     // вертаємо середнє значення
//     return sum / arrNumber.length;
// }

// console.log(calcAverage(array));
// console.log(calcAverage2(array));
