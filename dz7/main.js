console.log(`homework 7.1`)

for (var i = 20; i <= 30; i+=0.5) {
    console.log(i)
};



console.log(`
homework 7.2`)

let cash = 27;
for (var i = 10; i <= 100; i+=10) {
    console.log(cash * i)
}



console.log(`
homework 7.3`)

let iNum = prompt('Add the number');
for (let i = 1; i * i <= iNum; i++) {
    for (let a = 1; a * a <= iNum; a++) {
        if (i % a == 0);
        console.log(i);
    }   
}



console.log(`
homework 7.4`)

let eNum = prompt('Add the number');
for(i = 2; i <= eNum; i++){
    if(eNum % i == 0) 
    break;
}

if(eNum == i) console.log(`${eNum} - Просте число`);
else console.log(`${eNum} - Складене число`);



console.log(`
homework 7.5`)

let xNum = prompt('Add the number');
let sum = 0;
for(let i = 1; i <= xNum; i++) {
    if(xNum == 3**i) {
        sum = sum + 1;
    }
}

if(sum === 1) console.log(`${xNum} - Можна одержати шляхом зведення числа 3`);
else console.log(`${xNum} - Не можна одержати шляхом зведення числа 3`);