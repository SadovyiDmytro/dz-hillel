const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(len) {
    let str = '';
    for (let i = 0; i < len; i++) {
        let pos = Math.floor(Math.random() * characters.length);
        str += characters.substring(pos, pos + 1);
    }
    return str;
}
console.log(generateKey(16));

  