/* eslint-disable no-console */
/* eslint-disable quotes */
'use strict';

function getYearOfBirth(age) {
    const yearOfBirth = 2020 - age;
    return yearOfBirth
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old`;
}

const yob1 = getYearOfBirth(1000);
console.log(yob1);
const greeting1 = createGreeting('Sarah', 1000);
console.log(greeting1);