let newArr= [];
let xNum = 1;

for(let i = 0; i < xNum; i++) {

    let elNum = prompt('Enter the number of arrays');

    for(let x = 0; x < elNum; x++) {
        let elArr= [];

        let arrEl = prompt('Enter the length of the array');
        
        for(let x = 0; x < arrEl; x++) {
            let arrEl = prompt('Enter an array element');
            elArr.push(arrEl);
        }
        newArr.push(elArr);
    }
    console.log(newArr);
}


/* 3.
* Написати функцію заповнення даними користувача двомірного масиву.
* Довжину основного масиву і внутрішніх масивів задає користувач.
* Значення всіх елементів всіх масивів задає користувач.
*/
// function fillArray() {
//     const array = [];
//     // питаємо довжину зовнишнього масиву
//     const n = prompt('Enter the length of outer array');
//     // цикл по довжині зовнішнього масиву
//     for (let i = 0; i < n; i++) {
//         // створюємо внутрішній масив
//         array[i] = [];
//         // питаємо довжину внутрішнього масиву
//         const m = prompt(`Enter the length of ${i} inner array`);
//         // цикл по внутрішньому масиву
//         for (let j = 0; j < m; j++) {
//             // питаємо елемт для внутрішнього масиву
//             const arrayEl = prompt(`Enter the element of ${i} inner array`);
//             // кладемо в масив
//             array[i][j] = arrayEl;
//         }
//     }
//     // вертаємо готовий масив
//     return array;
// }

// console.log(fillArray());
