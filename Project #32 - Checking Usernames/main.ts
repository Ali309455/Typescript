// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users: string[] = ['Junaid','Hammad', 'Anas', 'Tabish','Shayan']
let new_users: string[] = ['Junaid', 'Anas', 'Rajeel','Sabah','Subhan']

for (let  i = 0;  i < new_users.length; i++) {
    const element = new_users[i] ;
    if (current_users.includes(element)) 
    {
        console.log('You need to enter a new username');
    }
    else
    {
        console.log('Username is avaliable');
    }
    
}