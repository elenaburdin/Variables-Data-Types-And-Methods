// This is a single line of code

/*
Multi line comment
console.log(100);

console.log('Hello World');

console.log(20, 'hello', true)
*/

const x = 100;

console.log(x);

console.error('Allert');

console.warn('Warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.log(x);
console.group('simple');
console.error('Allert');
console.warn('Warning');
console.groupEnd();

// adding css style to the console.log
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
