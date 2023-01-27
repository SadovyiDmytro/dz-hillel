function sumAdd() {
    let x = 0;
    function add(y) {
        return x += + y;
    }
    return add;
}
const sum = sumAdd();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));