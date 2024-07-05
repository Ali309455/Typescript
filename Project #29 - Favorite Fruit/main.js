"use strict";
// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits = ['Pomegranate', 'Guava', 'Apple', 'Black Current', 'Grapes'];
let a = favorite_fruits[0];
let b = favorite_fruits[1];
let c = favorite_fruits[2];
let d = favorite_fruits[3];
let e = favorite_fruits[4];
if (favorite_fruits.includes('Pomegranate')) {
    console.log(`I like ${a}`);
}
if (favorite_fruits.includes('Guava')) {
    console.log(`I like ${b}`);
}
if (favorite_fruits.includes('Apple')) {
    console.log(`I like ${c}`);
}
if (favorite_fruits.includes('Black Current')) {
    console.log(`I like ${d}`);
}
if (favorite_fruits.includes('Grapes')) {
    console.log(`I like ${e}`);
}
