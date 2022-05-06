const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);       // 99 99

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);       // [ 23, 65, 99, 21, 34, 55 ]
console.log(numbers2);      // [ 23, 65, 99, 21, 34, 88 ]