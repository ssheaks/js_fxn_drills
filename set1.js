/* eslint-disable no-console */
/* eslint-disable quotes */
'use strict';

function getYearOfBirth(age) {
    const yearOfBirth = 2020 - age;
    return yearOfBirth;
}

function createGreeting(name, age) {
    if (age < 0) {
        throw new Error('Age cannot be negative.');
    }
    if (typeof name !== 'string') {
        throw new Error('Invalid input: name must be a string');
    }
    if (typeof age !== 'number') {
        throw new Error('Invalid input: age must be a number');
    }
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old.
    I was born in ${yob}`;
}

let arr = [['Sarah', 22], ['Bonnie', 6], [true, 43], ['Heidi', -22], ['John',false]];
arr.forEach(([name, age]) => console.log(name, age) );

try {
    arr.forEach(([name, age]) => {
    let greeting = createGreeting(name, age);
    console.log(greeting)
    })
} catch(e) {
    console.error(e.message);
}

try {
    const greeting = createGreeting('Mandy', 23);
    console.log(greeting);
} catch(e) {
    console.error(e.message);
}
// const yob1 = getYearOfBirth(1000);
// console.log(yob1);
// console.log(getYearOfBirth(-1));
// const greeting1 = createGreeting('Sarah', 1000);
// console.log(greeting1);