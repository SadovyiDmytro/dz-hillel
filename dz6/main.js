console.log(`homework 6.1`)

let str = '10';

for (let i = 11; i <= 20; i++) {
    str = str + ', ' + i;
}
console.log(str);


console.log(`
homework 6.2`)

for (let i = 11; i <= 20; i++) {
    console.log(`sqr ${i} = ${i * i}`);
};


console.log(`
homework 6.3`)

for (let i = 11; i <= 20; i++) {
    console.log(`tabs ${i} = ${i * 7}`);
};



console.log(`
homework 6.4`)

let sum = 0
for (let i = 1; i <= 15; i++) {
    sum = sum + i; 
}
console.log(sum);



console.log(`
homework 6.5`)

let num = 1
for (let i = 15; i <= 35; i++) {
   num = num * i; 
}
console.log(num);


console.log(`
homework 6.6`)

let log = 0
for (let i = 1; i <= 500; i++) {
    log = log + i;
}
console.log(log / 500);



console.log(`
homework 6.7`)

let twc = 0
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        twc = twc + i; 
    }
}
console.log(twc);



console.log(`
homework 6.8`)

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


console.log(`
homework 6.9`)
//prompt('Add the number')//
let sNum = 12;
for (let i = 1; i <= sNum; i++) {
    if (sNum % i == 0) {
        console.log(i);

    }
}



console.log(`
homework 6.10`)

let xNum = 12;
let x = 2
for (let i = 1; i <= xNum; i++) {
    if (xNum % i == 0) {  
        if(i % x == 0) {
            console.log(i);
        }
    }
}



console.log(`
homework 6.11`)

let g = 0;
for (let i = 1; i <= xNum; i++) {
    if (xNum % i == 0) {  
        if(i % x == 0) {
            g += i;
            console.log(g);
        }
    }
}


console.log(`
homework 6.12`)

let cols = 10, rows = 10;
document.write("<table>");
for(let i = 1; i <= cols; i++){
  document.write("<tr>");
  for(let k = 1; k <= rows; k++){
    document.write("<td>"+(i*k)+"</td>");
  }
}