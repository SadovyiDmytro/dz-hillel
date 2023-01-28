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