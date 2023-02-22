console.log(100);

console.log('Hello World');

console.log(20, 'hello', true)

const x = 100;

console.log(x);

console.error('Allert');

console.warn('Warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.group('simple');
console.log(x);
console.error('Allert');
console.warn('Warning');
console.groupEnd();

// adding css style to the console.log
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);


console.log('Hello World');
console.log(10, 'Hi', false);
const i = 26;
console.log(i);
console.error('This is an error');
console.warn('warning message');
console.table({ name: 'Elena', email: 'test@email.com' });


const styling = 'padding: 15px; background-color: green; color: orange';
console.log('%cIreland', styling)