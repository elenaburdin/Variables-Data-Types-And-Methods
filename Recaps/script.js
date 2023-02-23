let firstName = 'Tony';
let lastName = 'Stark';

let newFirstName = firstName;
newFirstName = 'Iron Man';

console.log(firstName, newFirstName);


let bio = {
    name: 'Jane',
    age: 28
}

newBio = bio;
newBio.name = 'Jen'

console.log(bio, newBio);

// Convert
let number = 0;

// number = parseInt(number);
// number = Number(number);
// number = +number;

// number = number.toString(number);
// number = String(number);

// number = parseFloat(number);

number = Boolean(number)
console.log(number, typeof number);

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 - 5;
x = 7 % 5;

x = 5;
x++;
x--;

x = 2 == '2';
x = 2 === '2';
x = 2 != '2';
x = 2 !== '2';

x += 6;
x -= 6;

x = 2 ** 3;

console.log(x);