// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city:string , country: string): string
{
    return (`${city}, ${country}.`)
}

let l1:string = city_country('Karachi','Pakistan')
let l2:string = city_country('New Delhi','India')
let l3:string = city_country('Landon','England')


console.log(l1);
console.log(l2);
console.log(l3);
