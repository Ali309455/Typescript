// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests
console.log('Condition # 1');
let test1:string = 'Muslim'
let res1 =  test1 == 'Muslim'? true:false

console.log(res1);

console.log('Condition # 2');
test1.toLowerCase
let res2 =  test1 == 'Muslim'? true:false

console.log(res2);

console.log('Condition # 3');
let test3:number = 18
let res3 =  test3 > 18? true:false

console.log(res3);

console.log('Condition # 4');
let res4 =  test3 >= 18? true:false

console.log(res4);

test3 = 21
console.log('Condition # 5');
let res5 =  test3 <= 18? true:false

console.log(res5);

console.log('Condition # 6');
let res6 =  test3 <= 18 || test1 == 'Muslim'? true:false

console.log(res6);

console.log('Condition # 7');
let res7 =  test3 <= 18 && test1 == 'Muslim'? true:false

console.log(res7);

console.log('Condition # 8');
let test8:number[] = [1,2,3,4]
let a:number = 3 
let res8 =  test8.includes(a) == true ? `Array includes ${a}` :`Array includes ${a}`


console.log(res8);
console.log('Condition # 9');
let b:number = 7
let res9 =  test8.includes(b) == true ? `Array includes ${b}` :`Array includes ${b}`

console.log(res8);