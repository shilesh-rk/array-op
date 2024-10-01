const prompt = require('prompt-sync')();
const input = prompt('Enter 10 elements into array separated by commas: ');
const newAr = input.split(',').map(item => parseInt(item.trim()));

const revers = []
for (let i = newAr.length - 1; i >= 0; i--) {
    revers.push(newAr[ i ])
}

function findDup(newAr) {
    let elements = {}
    let duplicates = []
    for (let i = 0; i < newAr.length; i++) {
        const item = newAr[ i ];
        if (elements[ item ]) {
            elements[ item ]++
            if (elements[ item ] === 2) {
                duplicates.push(item)
            }
        }
        else {
            elements[ item ] = 1
        }
    }
    return duplicates.length ? duplicates.join(" ") : "None"
}

const missing = []
for (let i = 0; i <= 10; i++) {
    if (!newAr.includes(i)) {
        missing.push(i)
    }
}
console.log("Array elements are:: \n", newAr.join(" "));
console.log("Reverse Array:: \n", revers.join(" "));
console.log("Duplicate elements in array:: \n", findDup(newAr));
console.log("Missing elements in the array between 1 to 10:: \n", missing.join(" "));
