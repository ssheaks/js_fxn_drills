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

// Cracking the code
// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

// First letter	Character number
// a	2
// b	3
// c	4
// d	5
// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.
function decode(str) {
    const strArr = str.split(" ");
    const letterArr = strArr.map(word => {
        if(word.charAt(0) === 'a') {
            return word.charAt(1);
        } else if(word.charAt(0) === 'b') {
            return word.charAt(2);
        } else if(word.charAt(0) === 'c') {
            return word.charAt(3);
        } else if(word.charAt(0) === 'd') {
            return word.charAt(4);
        } else {
            return ' ';
        }
    });
    console.log(letterArr.join(''));
    return letterArr.join('');
}

const message = 'craft block argon meter bells brown croon droop';
decode(message);

// How many days in a month
// Write a function that takes the arguments month (string) and leapYear (boolean, optional) and use a switch statement to return a sentence explaining how many days there are in that month.

// For example if the argument provided is 'January', the function should return "January has 31 days". For February, it should return the appropriate 29 for leap years and 28 for non-leap. If the string doesn't match a valid month, throw an error with the message: 'Must provide a valid month.'

// HINT: If you have cases that return the same result, you can use switch's fallthrough behavior to provide one block of code for many cases. E.g.:

// switch(name) {
//   case 'rich':
//   case 'robert':
//   case 'ronald':
//     result = 'All names begin with R!'; 
//     break;
// }

function daysInMonth(month, leapYear = false) {
    let result = '';
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            result = `${month} has 30 days`;
            break;
        case 'February':
            if(leapYear===true) {
                result = `${month} has 29 days`;
            }else {
                result = `${month} has 28 days`;
            }
            break;
        default: 
            result = 'Please enter a valid month';
    }
    console.log(result);
    return result;
}

daysInMonth('July');
daysInMonth('February');
daysInMonth('February', true);
daysInMonth('Februa');

// Rock Paper Scissors
// In the game Rock Paper Scissors, two players simultaneously choose one of the three options: rock, paper, or scissors. If both players choose the same option, the result is a tie. Otherwise the winner is determined as follows:

// Rock beats scissors
// Scissors beats paper
// Paper beats rock
// Create a game in which you are playing against the computer. The computer randomly chooses rock, paper, or scissors. Your function should take a number as an argument of 1, 2, or 3 to represent rock, paper, or scissors, respectively, and determine the winner. If you enter anything other than a number between 1-3, throw an error.

// The code to generate a random number between 1 and 3 is -

// const randomNo = Math.floor(Math.random() * 3) + 1;
//rock = 1, paper = 2, scissors = 3

function rockPaperScissors(choice) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    console.log(randomNo);
    if(randomNo === choice) {
        console.log(`It's a tie`);
    } else if(randomNo === 1 && choice === 2) {
        console.log('You win');
    } else if(randomNo === 1 && choice === 3) {
        console.log('Computer wins');
    } else if(randomNo === 2 && choice === 1) {
        console.log('Computer wins');
    } else if(randomNo === 2 && choice === 3) {
        console.log('You win');
    } else if(randomNo === 3 && choice === 1) {
        console.log('You win');
    } else if(randomNo === 3 && choice === 2) {
        console.log('Computer wins');
    } 
}
rockPaperScissors(1);