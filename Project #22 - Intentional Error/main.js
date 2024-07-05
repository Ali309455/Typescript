"use strict";
// f you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let arr = [2, 3, 4, 5];
let a = 0;
let b = 4;
console.log('Without Error:');
console.log(arr[a]);
console.log('With Error:');
console.log(arr[b]);
try {
    let c = arr[5];
    if (b < 0 || b >= arr.length) {
        throw new Error('IndexError');
    }
}
catch (Error) {
    console.log('Error Handling:');
    console.log(`Wrong Index ${b}`);
}
