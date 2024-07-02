// Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Mohammad Ali  2 June 2024



// Assignment # 3
let nam:string = 'Mohammad Ali'
let a:string = nam.toUpperCase()
// LowerCase
let b:string = nam.toLowerCase()
// TittleCase
function TittleCase(nam:string)
{
let d:string[] = nam.toLowerCase().split(' ');
for(let i:number=0;i<d.length; i++)
{
    // console.log(d[i].slice(1));
    
    d[i] = d[i].charAt(0).toUpperCase() + d[i].slice(1);
}
return d.join(' ')
}

console.log('UpperCase:' ,a);
console.log('LowerCase:' ,b);
console.log('TitleCase:' ,TittleCase(nam));


// Assignment # 4

let n:string = "Hazrat Mohammad (S.A.W)";
let quote:string = '"If My servant likes to meet Me, I like to meet him; and if he dislikes to meet Me, I dislike to meet him."'
console.log(n,'once said:', quote);