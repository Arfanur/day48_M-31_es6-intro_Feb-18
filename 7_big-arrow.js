const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;

const result = multiply(4, 12, 3);

const tentimes = (num) => num * 10;
const output = tentimes(17);

const fivetimes = num => num * 5;
const value = fivetimes(17);

const getName = () => 'Brendon Sam';
const name = getName();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
};

const total = doMath(12, 5);
console.log(total);

// document.getElementById('my-btn').addEventListener(event => {
// })