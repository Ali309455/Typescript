"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(a) {
    console.log(`Your Sandwitch includes:`);
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        console.log(`${index + 1}. ${element}.`);
    }
}
let ingredients = ['Extra Cheese', 'Garlic Sauce', 'Double Grilled beef patty', '3 slices of tomato', 'Chipottle Sauce', 'Green Olives'];
sandwiches(ingredients);
