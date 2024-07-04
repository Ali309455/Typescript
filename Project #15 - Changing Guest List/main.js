"use strict";
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Invitation = ['Haji Abdul Aziz', 'Mohammad Hassan', 'Khalid Aziz', ''];
let a = 'Rashid Aziz';
let b = 'Shahzad Aziz';
let c = 'Shamshad Aziz';
let New_Invitation = [];
Invitation.splice(0, 3);
New_Invitation.push(a);
New_Invitation.push(b);
New_Invitation.push(c);
for (let i = 0; (i < New_Invitation.length); i++) {
    console.log(`Assalam Ualikum! ${New_Invitation[i]}, you are invited for dinner today `);
}
