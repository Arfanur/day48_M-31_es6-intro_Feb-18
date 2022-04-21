function add(num1, num2 = 33) {  // any number can be given instead 33
    // option 2
    // num2 = num2 || 0;
    // option 1
    // console.log(num1, num2);
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 0);
// console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const personName = fullName('arfanur');   // duita parameter na dile automatic 'Chowdhury' ke ditio parameter dhore nibe
console.log(personName);