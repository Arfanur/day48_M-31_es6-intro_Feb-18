// variable
var deposit = 400;
// condition
if (deposit > 500) {

}
else if (deposit < 200) {

}
else if (deposit == 500) {

}
else if (deposit != 500) {

}
else if (deposit >= 500) {

}
else if (deposit <= 500) {

}
else {

}

// array
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.push(111);
numbers[2] = 555;

// check whether 222 included in the array
if (numbers.indexOf(222) != -1) {

}
if (numbers.includes(222)) {    // 222 jodi thake tahole, true hobe, nahole false hobe

}

// loop
// while, for
for (const number of numbers) {

}

// function
function fullName(first, second) {
    const name = first + ' ' + second;
}
const person = fullName('Rahim', 'Ali');

// object
const botle = {
    color: 'yellow',
    contain: 'water',
    price: 50
};