const run = removerLetters;
function removerLetters() {
    const str = prompt('Enter the text');
    console.log (str);
    let strArr = str.split(''); //+++
    const chars = [];
    let xNum = 1;

    for(let i = 0; i < xNum; i++) {
        chars.push;

        let elNum = prompt('Enter the number of characters to delete');

        for(let x = 0; x < elNum; x++) {
            let elem = prompt('Enter the item to delete');
            chars.push(elem);
            
        }
        console.log(chars);
    }

    const res = [];

    for(let i = 0; i < strArr.length; i++) {
        if (chars.indexOf(strArr[i]) == -1) {
            res.push(strArr[i]);
        }
    }
    const result = res.join('');
    
    return result;
}
console.log(run());


// - MW - //
// function filterString(str, arr) {
//     let filteredStr = '';
//     // цикл по стрінгу
//     for (let letter of str) {
//         // перевіряємо чи кожна буква є у масиві
//         if (!arr.includes(letter)) {
//             filteredStr += letter;
//         }
//     }
//     return filteredStr;
// }

// const userStr = prompt('Enter the string');
// const userLetters = prompt('Enter letters to delete with comma')

// console.log(filterString(userStr, userLetters.split(',')));