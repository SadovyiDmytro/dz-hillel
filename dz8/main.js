let newArr= [];
let xNum = 1;
let sortArr = [];
let spliArr = [];

for(let i = 0; i < xNum; i++) {
    newArr.push([]);
    sortArr.push([]);
    spliArr.push([]);

    let elNum = prompt('Введіть довжину масиву');

    for(let x = 0; x < elNum; x++) {
        let elem = prompt('Введіть елемент масиву');
        newArr[i].push([elem]);
        sortArr[i].push([elem]);
        spliArr[i].push([elem]);
    }
    console.log(newArr[i]);
}


console.log(`
homework 8.2`);


for (i = 0; i < sortArr.length; i++) {
    console.log(sortArr[i].sort((a,b) => a-b));
}


console.log(`
homework 8.3`);

for (i = 0; i < spliArr.length; i++) {
    spliArr [i].sort((a,b) => a-b)
    spliArr[i].splice(2, 2);
}
console.log(spliArr)

    

    

