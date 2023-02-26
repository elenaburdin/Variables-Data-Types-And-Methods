let d;

d = new Date();

d = toString();

// the monrh is zero based so we will get Jul as 6, and 1 will be February, 0 will get January
d = new Date(2023, 1, 10);

// for the time
d = new Date(2023, 1, 10, 12, 30, 0); // 12 is for hour, 30 is for minutes, 0 is for seconds

// if we will use string then 07 is July
d = new Date('2023-07-10');
d = new Date('2023-07-10T12:30:00');
d = new Date('07/10/2023 12:30:00');
d = new Date('07-10-2023');

// Time stamp
d = Date.now();

// exact time
// d = new Date('2023-07-10 12:30:00'); 
d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1677355542551);

d = Math.floor(Date.now() / 1000);


d = new Date();
d = new Date('2024, 04, 11')
d = new Date('2024, 01, 26')
d = new Date('2024-01-26T12:30:15')

d = d.getTime()
d = new Date(1706268615000);


console.log(d);