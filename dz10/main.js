let array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, value) => {
    return array.filter(el => el !== value);
}
console.log(removeElement(array, 5))