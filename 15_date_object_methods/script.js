let x;

let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

// if u want to get a specific part of the date
x = d.getFullYear();

// get the month (zero based)
x = d.getMonth();
x = d.getMonth() + 1; // get the correct

// get date
x = d.getDate();

// to get the day of the week
x = d.getDay();

// the current hours
x = d.getHours();

// get the minutes
x = d.getMinutes();

// get seconds
x = d.getSeconds();

// get milliseconds
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2023-2-25

// There is API that we can use with time
x = Intl.DateTimeFormat('en-GB').format(d);
// for default
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // that formati will give the current month in letters
// shorter way
x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',

})


console.log(x);