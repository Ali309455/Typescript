"use strict";
// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_name_with_whitespace = '\tMohammadAli\nIrshad\tAbdul\nAziz';
function removeSpaces(input) {
    let b = input.includes('\t');
    let c = input.includes('\n');
    if (b == true && c == true) {
        let output1 = input.split('\t').join('');
        let output2 = output1.split('\n').join('');
        return (output2);
    }
    else if (b == true) {
        let output1 = input.split('\t').join('');
        return (output1);
    }
    else if (c == true) {
        let output1 = input.split('\n').join('');
        return (output1);
    }
}
let person_name_without_whitespace = removeSpaces(person_name_with_whitespace);
console.log('With Whitespaces:', person_name_with_whitespace);
console.log('Without Whitespaces:', person_name_without_whitespace);
