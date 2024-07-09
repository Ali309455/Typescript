"use strict";
// Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames = [];
// let usernames:string[] = ['Ali','Anas','Zayan', 'Admin','Abdullah','Abdul Wahab', 'Umer']
let len = usernames.length;
if (len > 0) {
    for (let index = 0; index < usernames.length; index++) {
        let username = usernames[index];
        if (username === 'Admin') {
            console.log(`Assalam Ualikum ${username}, would you like to see the reports.`);
        }
        else {
            console.log(`Assalam Ualikum ${username}, thank you for logging in.`);
        }
    }
}
else {
    console.log('We need to find some Users');
}
