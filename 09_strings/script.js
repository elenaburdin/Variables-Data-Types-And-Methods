let x;

const name = 'John';
const age = 25;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals also called Template Strings
x = `Hello, my name is ${name} and I am ${age} years old`

// String Properties and Methods
const s = new String('Hello World');
x = typeof s;

x = s.length;

// Access value by key
x = s[1];

// Objects have prototype and that is where methods are stored
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

// substring
x = s.substring(2, 5);
x = s.substring(7); // starts at 7 and get the rest of the string

// slice
x = s.slice(0, 5); // we can start with the negative numbers
x = s.slice(-11, -6);

// trim
x = '           Hello World'
x = s.trim(); // trims (removes white spaces) the white space

x = s.replace('World', 'John');

x = s.includes('Hello'); //true

x = s.valueOf();

x = s.split(' ');

console.log(x);
