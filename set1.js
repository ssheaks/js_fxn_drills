/* eslint-disable no-console */
/* eslint-disable quotes */
'use strict';

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I'm ${age} years old`;
}

const greeting1 = createGreeting('Sarah', 1000);
console.log(greeting1);