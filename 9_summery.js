let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great';

// default parameter
function calculate(x, y, z = []) {

}
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
    // return `${first} ${last}`;
}

// template string
const myPeople = `My lovely person is ${hubby} and his fullName is ${getName('Akber')}. My name is ${priyoPerson}.`;

console.log(myPeople);

// arrow function
// const getName2 = (first, last) => first + ' ' + last;
const getName2 = (first, last) => `${first} ${last}`;
const fivetimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
};

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers);