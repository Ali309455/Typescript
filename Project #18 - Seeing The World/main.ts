// Think of at least five places in the world you’d like to visit.
let world:string[] = ['Switzerland','Saudi Arabia', 'Palestine','Thiland', 'Bali']
// In original Order
console.log('In Original Order:');
console.log(world);
// In Alphabetic Order
console.log('In Alphabetical Order:');
let sortedList:string[]= world.slice().sort();
console.log(sortedList);
console.log("The Actual Array Didn't change:");
console.log(world);
// Reversed Original Array
console.log('Reversed Original Array:');
console.log(world.reverse());
// Again Reversed Original Array
console.log('Again Reversed Original Array:');
console.log(world.reverse());
// Reversed Sorted Array
console.log('Reversed Sorted Array:');

console.log(sortedList.reverse());




