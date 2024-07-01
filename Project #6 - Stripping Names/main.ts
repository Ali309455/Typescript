// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_name_with_whitespace:string = '\tMohammadAli\nIrshad\tAbdul\nAziz'
function removeSpaces(input: string) {
    let b:any = input.includes('\t')
    let c:any = input.includes('\n')
    if (b == true && c == true) 
    {
    let output1:any = input.split('\t').join('')
    let output2:any = output1.split('\n').join('')
    
     return(output2)
    }
    else if (b == true ) 
    {
    let output1:any = input.split('\t').join('')
     return(output1)
    }
    else if ( c == true) 
    {
    let output1:any = input.split('\n').join('')
    
     return(output1)
    }
}
let person_name_without_whitespace:string = removeSpaces(person_name_with_whitespace)
console.log('With Whitespaces:',person_name_with_whitespace);
console.log('Without Whitespaces:',person_name_without_whitespace);

