
// Q1: my answer (code) for question 1:
function arrayChecker(array, number) {
    if (Array.isArray(array) && typeof number == 'number') {
        if (array.includes(number)) {
            console.log(`True: number (${number}) is found in the array: [${array}].`);
        } else {
            console.log("False: number is not found in the array!")
        }
    } else {
        console.log('Please provide an array AND a number!');
    }
}

arrayChecker([1, 2, 3, 4, 5], 3);
arrayChecker([1, 1, 2, 1, 1], 3);
arrayChecker([5, 5, 5, 6], 5);
arrayChecker([], 5);

//==================================================================
// Q2: my answer (code) for question 2:

function convertToSeconds(hour, minute) {
    let totalMinutes = (hour * 60) + minute;
    let seconds = totalMinutes * 60;
    console.log(`${hour} H, and ${minute} M, equal: ${seconds} seconds.`);
}

convertToSeconds(1, 3);
convertToSeconds(2, 0);
convertToSeconds(0, 0);

//==================================================================
// Q3: my answer (code) for question 3:

let  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

// 1- access the value of the capacityInGallons key:
console.log(`Capacity In Gallons: ${aquarium.capacityInGallons}.`);

// 2- add 2 rocks to the numberOfRocks in the aquarium:
aquarium.numberOfRocks += 2;
console.log(`Number of Rocks = ${aquarium.numberOfRocks}.`);

// 3- access the clown fish and print the object.
let clownFish = aquarium.fish[2];
console.log(clownFish);

// 4- access the size of the puffer fish.
let pufferFishSize = aquarium.fish[1].size;
console.log(`The size of Puffer Fish = ${pufferFishSize}.`);

// 5- your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
let goldFishSize = aquarium.fish[0].size;
goldFishSize = '4 inches';
console.log(`The size of Gold Fish = ${goldFishSize}.`);

// 6- you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
let starFish = {
    type: 'starfish',
    size: '5 inches',
    color: 'blue'
}

aquarium.fish.push(starFish);
console.log(aquarium.fish);

//==================================================================
