// // Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

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

magician = make_Great(magician);
console.log(magician);
show_magicians(magician);
