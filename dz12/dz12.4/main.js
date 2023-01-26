const removeChar = (str, c) => str.replaceAll(new RegExp(`[${c}]`, "gi"), "");

const run = removerLetters;
function removerLetters() {
    const str = prompt('Enter the text');
    console.log (str);
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
    let result = str;
    chars.forEach((char) => {
        result = removeChar(result, char);
    });
    return result;
}
console.log(run());