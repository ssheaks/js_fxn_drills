/* eslint-disable indent */
'use strict';

// Jedi name
// Write a function called jediName which takes two arguments:

// firstName - a person's first name
// lastName - a person's last name
// The function should return the person's Jedi name. A Jedi name is formed from the first three letters of the last name, and the first two letters of the first name. For example, jediName('Beyonce', 'Knowles') should return 'KnoBe'.
function jediName(firstName, lastName) {
    const name = `${lastName.slice(0, 3)}${firstName.slice(0,2)}`;
    return name;
}
const myName = jediName('Sarah', 'Borris');
console.log(myName);

// To infinity...
// Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

// If num is infinite (either positive or negative) it should log out 'And beyond'.
// If num is finite and positive it should log out 'To infinity'.
// If num is finite and negative it should log out 'To negative infinity'.
// If num is zero it should log out 'Staying home'.
function beyond(num) {
    if(num === (Infinity || Number.NEGATIVE_INFINITY)) {
        console.log('And beyond');
        console.log(num);
        return 'And beyond';
    } else if(num > 0) {
        console.log('To infinity');
        return 'To infinity';
    } else if(num < 0) {
        console.log('To negative infinity');
        return 'To negative infinity';
    } else {
        console.log('Staying home');
        return 'Staying home';
    }
}

const numArr = [Infinity, -Infinity, 0, 33, -4, 1000000];
const results = numArr.map(item => beyond(item));
console.log(results);

beyond(Infinity);
beyond(Number.NEGATIVE_INFINITY);
beyond(5);