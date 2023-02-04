function doMath(x, y, znak) {
    x = prompt('Enter x number');
    y = prompt('Enter y number');
    znak = prompt('Enter operator "znak" (+, -, *, /, %, **)');
    console.log(x, znak, y);
    let calc = function (x, y, znak) {
        return znak(x, y);
    };
    let add = function (x, y) {
        return x + y;
    };
    let subtract = function (x, y) {
        return x - y;
    };
    let multiply = function (x, y) {
        return x * y;
    };
    let divide = function (x, y) {
        return x / y;
    };
    let remaind = function (x, y) {
        return x % y;
    };
    let exponent = function (x, y) {
        return x ** y;
    };
 
    switch (znak) {
        case "+":
            return calc(x, y, add);
        case "-":
            return calc(x, y, subtract);
        case "*":
            return calc(x, y, multiply);
        case "/":
            return calc(x, y, divide);
        case "%":
            return calc(x, y, remaind);
        case "**":
            return calc(x, y, exponent);
 
    }
}
 
console.log(doMath());

/*
2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
* числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь).
* Вивести результат математичної дії, вказаної в змінній znak.
* Обидва числа і знак виходять від користувача.
*/
// const x = prompt('Введіть перше число x');
// const y = prompt('Введіть друге число y');
// const znak = prompt('Введіть знак +, -, *, /, %, ^ (ступінь)');

// console.log(doMath(x, znak, y));

// function doMath(x, znak, y) {
//     let result;
//     // перевірка чи введені значення не null
//     if (x && y && znak) {
//         // обробка кожного кейсу
//         switch (znak) {
//             case '+':
//                 result = Number(x) + Number(y);
//                 break;
//             case '-':
//                 result = x - y;
//                 break;
//             case '*':
//                 result = x * y;
//                 break;
//             case '/':
//                 result = x / y;
//                 break;
//             case '%':
//                 result = x % y;
//                 break;
//             case '^':
//                 result = x ** y;
//                 break;
//             default:
//                 result = 'Не знаю такий знак'
//                 break;
//         }
//     } else {
//         result = 'Ви не ввели значення';
//     }
//     // вертаємо результат
//     return result;
// }