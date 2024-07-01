"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let n = 'Ali';
let nam = 'Mohammad Ali';
// upercase
let a = n.toUpperCase();
// LowerCase
let b = n.toLowerCase();
// TittleCase
function TittleCase(nam) {
    let d = nam.toLowerCase().split(' ');
    for (let i = 0; i < d.length; i++) {
        // console.log(d[i].slice(1));
        d[i] = d[i].charAt(0).toUpperCase() + d[i].slice(1);
    }
    return d.join(' ');
}
console.log('UpperCase:', a);
console.log('LowerCase:', b);
console.log('TitleCase:', TittleCase(nam));
