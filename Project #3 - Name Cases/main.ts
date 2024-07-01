// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let n:string = 'Ali'
let nam:string = 'Mohammad Ali'
// upercase
let a:string = n.toUpperCase()
// LowerCase
let b:string = n.toLowerCase()
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