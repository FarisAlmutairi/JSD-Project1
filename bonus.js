// Q1 Bonus Questions:
// Answer: (with function statement)

function getRandomNum(num) {
    let randomNum = Math.random() * (num + 1);
    return randomNum;
}


let randomly = Math.floor(getRandomNum(7));
console.log(`Random number: ${randomly}`);


// ==============================================================================
// Q2 Bonus Questions:
// Answer: (with function expression (using fat=arrow anonymous function))


let isLeep = (year) => {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        console.log(`True: The year (${year}) is a leap year!`);
    } else {
        console.log(`False: The year (${year}) is NOT a leap year!`);
    }
}

isLeep(2020);
isLeep(1800);
isLeep(2000);
isLeep(2019);



