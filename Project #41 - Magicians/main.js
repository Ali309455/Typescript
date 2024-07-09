"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ['Albert', 'Luke', 'Carl'];
function show_magicians(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(`"${element}."`);
    }
}
show_magicians(magician);
