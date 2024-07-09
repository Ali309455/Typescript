"use strict";
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3
let Ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let i = 0; i < Ordinal_numbers.length; i++) {
    const element = Ordinal_numbers[i];
    if (element == 1) {
        console.log(`The Ordinal Number is: ${element}st`);
    }
    else if (element == 2) {
        console.log(`The Ordinal Number is: ${element}nd`);
    }
    else if (element == 3) {
        console.log(`The Ordinal Number is: ${element}rd`);
    }
    else {
        console.log(`The Ordinal Number is: ${element}th`);
    }
}
