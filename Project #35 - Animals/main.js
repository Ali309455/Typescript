"use strict";
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
let Animals = ['Goat', 'Cow', 'Camel'];
for (let index = 0; index < Animals.length; index++) {
    const element = Animals[index];
    // console.log(element);
    if (element === 'Goat') {
        console.log(`${element} is human friendly animal`);
    }
    else if (element === 'Cow') {
        console.log(`${element} is mainly used for flesh`);
    }
    else {
        console.log(`${element} is desert animal.`);
    }
}
console.log('All the Animals in the list are considered as Farm Animals.');
