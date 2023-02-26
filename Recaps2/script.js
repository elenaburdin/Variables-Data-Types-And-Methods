// window.alert('Alert message');
// console.error('ERROR Message');
// console.warn('Warning Message');
// console.table({ name: 'Elena', id: 245, email: 'random_email@mail.com' });

// console.group('Group Method');
// console.log('Hello World');
// console.log(4589600);
// console.groupEnd();

// styling
// const style = 'padding: 10px 15px; background-color: green; color: orange';
// console.log('%cHello World', style);

// const styleSecond = 'padding: 10px 15px; background-color: olive; color: white; border: 2px solid black; border-radius: 5px';
// console.log('%cHello Again', styleSecond);

// Variables and COnstants
// let name = 'Brad';
// let age = 37;

// console.log(age);

// multiple values at once
// let a = 10, b = 45, c = 55;
// console.log(b);


// Primitive Types
// const firstName = 'Sara';
// const num = 45;
// const secondNum = 45.5;
// const isCool = true;
// let x;
// const score = undefined;
// const id = Symbol('id');
// const num = Symbol('num');
// const x = 9999999999999n;
// const aptNumber = null;

// Reference Types
// const numbers = [1, 2, 3];

// function bye() {
//     console.log('bye bye')
// }


// let name = 'Jane';
// let age = 28;

// let person = {
//     id: 758,
//     name: 'Sara',
//     age: 25,
//     email: 'sara@mail.com'
// }

// let newName = name;
// newName = 'Julia';

// console.log(newName);

// let newEmail = person.email;
// newEmail = 'sara11@mail.com';
// let newId = person.id;
// newId = 55;

// console.log(newId);
// console.log(newEmail);
// console.log(person);

// Type Conversions

// from string to number
// let num = 10.5;
// let numStr = parseInt(num);
// let numStr = +num;
// let numStr = Number(num);

// let n = num.toString();
// let n = String(num);
// let nums = parseFloat(num);

// Operators
// x = 5 + 5;
// x = 5 - 2;
// x = 5 * 2;
// x = 5 / 2;
// x = 5 % 2;

// x += 10;
// x -= 5;
// let x;
// x = 2 == '2';
// x = 2 === '2';
// x = 2 != '2';
// x = 2 !== '2';
// x = 5 > 2;
// x = 5 < 2;
// x = 5 <= 2;
// x = 5 >= 2;
// x++;
// ++x;
// x--;
// --x;

// x = 2 + '2';
// x = 2 * '2';
// x = 2 - '2';
// x = 2 / '2';


// Working with Strings
// const name = 'John';
// const age = 18;

// console.log(`Hello, my name is ${name} and I am ${age} years old`);
// let x;
// const s = new String('Hello World');
// s.__proto__;

// x = s.toUpperCase();
// x = s.toLowerCase();
// x = s.trim();
// x = s.replace('World', 'Jane');
// x = s.indexOf();
// x = s.valueOf();
// x = s.length;
// x = s.slice(0, 5);
// x = s.substring(0, 5);
// x = s.includes('Hellu');
// x = s.split(' ');

// wondorful => Wonderful
// let word = 'wonderful';
// let newWord = (word.charAt(0).toUpperCase()) + (word.slice(1));
// console.log(newWord);

// let quotes = 'lorem Ipsum comes from a latin text written';
// // Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero
// let newQuotes = (quotes.charAt(0).toUpperCase() + (quotes.slice(1)) + quotes.charAt(6).toUpperCase()) + (quotes.slice(1));

// console.log(newQuotes);

// const num = 5;


// // const x = new Number(5);

// x = num.toFixed(2);
// x = num.toExponential(2);
// x = num.valueOf();

// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;
// console.log(x, typeof x);

// Math Object
// let x;
// x = Math.sqrt(9);
// x = Math.abs(5);
// x = Math.round(4.6);
// x = Math.round(4.2);
// x = Math.ceil(4.2);
// x = Math.floor(4.9);
// x = Math.pow(2, 3);
// x = Math.min(4, 55, 6,)
// x = Math.max(4, 55, 6,)

// x = Math.random();
// x = Math.floor(Math.random() * 50) + 1;

// calculation
// x = Math.floor(Math.random() * 100) + 1;
// y = Math.floor(Math.random() * 50) + 1;

// let exampleOne = `${x} + ${y} = ${x + y}`;
// console.log(exampleOne);

// let exampleTwo = `${x} - ${y} = ${x - y}`;
// console.log(exampleTwo);

// let exampleThree = `${x} * ${y} = ${x * y}`;
// console.log(exampleThree);

// let exampleFour = `${x} / ${y} = ${x / y}`;
// console.log(exampleFour);

// let exampleFive = `${x} % ${y} = ${x % y}`;
// console.log(exampleFive);

// x = Date();
// x = new Date();
// x = Date.now();
// x = new Date(2023, 05, 26);
// x = new Date('2023, 05, 26');
// x = x.getTime();
// x = x.valueOf();

let x;

let d = new Date();

x = d.getFullYear();
x = d.getDay();
x = d.getMinutes();
x = d.getMilliseconds();
x = d.getHours();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay()}`;
x = Intl.DateTimeFormat('en-GB').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = Intl.DateTimeFormat('default', { month: 'short' }).format(d);

x = d.toLocaleString('default', {
    weekday: 'long',
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
})


console.log(x);








