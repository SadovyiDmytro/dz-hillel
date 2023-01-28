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