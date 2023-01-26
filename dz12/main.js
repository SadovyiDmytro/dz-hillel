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