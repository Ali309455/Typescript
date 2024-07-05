"use strict";
// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each use
let usernames = ['Ali', 'Anas', 'Zayan', 'Admin', 'Abdullah', 'Abdul Wahab', 'Umer'];
for (let index = 0; index < usernames.length; index++) {
    let username = usernames[index];
    if (username === 'Admin') {
        console.log(`Assalam Ualikum ${username}, would you like to see the reports.`);
    }
    else {
        console.log(`Assalam Ualikum ${username}, thank you for logging in.`);
    }
}
