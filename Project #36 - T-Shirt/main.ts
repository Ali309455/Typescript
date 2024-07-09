// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function T_shirt(size:number, text:string  )
{
    console.log(`The size of the Shirt is: ${size} And the text is:\n "${text}"`);
}

let size:number = 32
let text:string = 'Consistency is the key.'

T_shirt(size,text)