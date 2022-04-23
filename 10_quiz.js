// 1.
// const numbers = [45, 12, 36, 84];
// numbers.unshift(25);
// console.log(numbers);

// 2.
function getSum(a, b = 9) {
    return a + b;
}
// console.log(getSum(2, 7));  // 9

// 3.
const y = x => x * x;
const z = y(5);
// console.log(z);  // 25

// 4.
const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];
const array2 = [...nayikas];
// console.log(array2);

// 5.
const myfunc = () => console.log('nayok!');

// 7.
const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(Math.max(...numbers));      // 70