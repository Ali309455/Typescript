// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let Invitation: string[] = ['Haji Abdul Aziz','Mohammad Hassan', 'Khalid Aziz', '']

let a:string = 'Rashid Aziz'
let b:string = 'Shahzad Aziz'
let c:string = 'Shamshad Aziz'

let New_Invitation: string[] = []

Invitation.splice(0,3)
New_Invitation.push(a)
New_Invitation.push(b)
New_Invitation.push(c)

let New_Invitation2: string[] = New_Invitation;

let d:string = 'Ambreen Sarfaraz'
let e:string = 'Mohtarma Mazda'
let f:string = 'Mohtarma Shaquran'

New_Invitation2.splice(0, 0,d );
New_Invitation2.splice(0, 0,e );
New_Invitation2.splice(0, 0,f );

for(let i:number = 0; (i < New_Invitation2.length) ; i++)
{
    console.log(`Assalam Ualikum! "${New_Invitation2[i]}", you are invited for dinner today. `);
}

// Project # 17
console.log('Project # 17');

let g:string[] = New_Invitation2.splice(2,4)

for(let i:number = 0; (i < g.length) ; i++)
{
    console.log(`Assalam Ualikum! "${g[i]}", I am sorry to tell you that due to some reason I can't invite you.`);
}

console.log('New List:');

for(let i:number = 0; (i < New_Invitation2.length) ; i++)
{
    console.log(`Assalam Ualikum! "${New_Invitation2[i]}", you are invited for dinner today. `);
}