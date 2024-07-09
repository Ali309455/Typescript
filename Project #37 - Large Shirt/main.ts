// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function T_shirt(size:number |string = 'Large' , text:string = 'I love Typescript.'  )
{
    if (size == 'Medium')
    {
        console.log(`The size of shirt is : ${size} , And the text is:\n "${text}"`);
    }
    else if (size == 'Small')
    {
        console.log(`The size of shirt is : ${size} And the text is:\n "${text}"`);
    }
    else
    {
        console.log(`The size of shirt is : ${size} And the text is:\n "${text}"`);
    }
}
let size: string|number = 'Small'
let text: string = 'There is nothing like Forever'

T_shirt(size, text)
// T_shirt()

