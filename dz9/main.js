const newArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(newArr)


console.log(`
homework 9.1`);

let sum = 0;
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > 0) {
        sum += newArr[i];
    }
}
console.log(sum);


console.log(`
homework 9.2`);

for(var i = 0, min = 0; i < newArr.length; i++){
    if(newArr[i] < newArr[min]) {
        min = i;
    } 
}
console.log(newArr[min], min);


console.log(`
homework 9.3`);

for(var i = 0, max = 0; i < newArr.length; i++){
    if(newArr[i] > newArr[max]) {
        max = i;
    }     
}
console.log(newArr[max], max);


console.log(`
homework 9.4`);


let minSum = 0;
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < -1) {
        minSum += newArr[i];
    }
}
console.log(minSum);


console.log(`
homework 9.5`);

for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 0 && newArr[i] % 2 != 0) {
        console.log(newArr.length);
    }
}


console.log(`
homework 9.6`);

for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 0 && newArr[i] % 2 === 0) {
        console.log(newArr.length);
    }
}



console.log(`
homework 9.7`);

let doubleSum = 0;
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 0 && newArr[i] % 2 === 0) {
        doubleSum = doubleSum + newArr[i];
    }  
}
console.log(doubleSum);



console.log(`
homework 9.8`);

let nonDoubleSum = 0;
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 0 && newArr[i] % 2 != 0) {
        nonDoubleSum = nonDoubleSum + newArr[i];
    }  
}
console.log(nonDoubleSum);



console.log(`
homework 9.9`);

let multiNum = 1;
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] > 0) {
        multiNum = multiNum * newArr[i];
    }  
}
console.log(multiNum);



console.log(`
homework 9.10`);

let maxNum = 0;
let zNum = 0;
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > maxNum) {
        maxNum = newArr[i];
        newArr[zNum] = 0;
        zNum = i;
    }
    else {
        newArr[i] = 0;
    }
}
console.log(newArr);