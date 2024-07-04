"use strict";
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let Invitation = ['Haji Abdul Aziz', 'Mohammad Hassan', 'Khalid Aziz', ''];
let a = 'Rashid Aziz';
let b = 'Shahzad Aziz';
let c = 'Shamshad Aziz';
let New_Invitation = [];
Invitation.splice(0, 3);
New_Invitation.push(a);
New_Invitation.push(b);
New_Invitation.push(c);
let New_Invitation2 = New_Invitation;
let d = 'Ambreen Sarfaraz';
let e = 'Mohtarma Mazda';
let f = 'Mohtarma Shaquran';
New_Invitation2.splice(0, 0, d);
New_Invitation2.splice(0, 0, e);
New_Invitation2.splice(0, 0, f);
for (let i = 0; (i < New_Invitation2.length); i++) {
    console.log(`Assalam Ualikum! "${New_Invitation2[i]}", you are invited for dinner today `);
}
