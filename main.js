data = require('./data');

let json = JSON.parse(data);

// Q4: my answer (code) for question 4:

let logData = function(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
    }
}

let logNames = function(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        console.log(objArray[i].name);
    }
}

let logNamesEyes = function(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        console.log(objArray[i].name, objArray[i].eye_color);
    }
}

let logByMass = function(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].mass > 75) {
            console.log(objArray[i].mass);
        }
    }
}

logData(json.people);
logNames(json.people);
logNamesEyes(json.people);
logByMass(json.people);

