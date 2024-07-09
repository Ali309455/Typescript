
let magician: string[] = ['Albert','Luke','Carl']

function show_magicians(array:string[]) 
{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(`"${element}."`);
    }
}

function make_Great(array:string[]) 
{
    // let len:number = array.length
    let great_magician: string[] = []
    for (let index = 0; index < array.length; index++) {
        const element = `Great ${array[index]}`;
        great_magician.push(element)
    }
    return great_magician
}

let greatmagician = make_Great(magician);
console.log('The Changed Array:');
show_magicians(greatmagician);
console.log('The Unchanged Array:');
show_magicians(magician);
