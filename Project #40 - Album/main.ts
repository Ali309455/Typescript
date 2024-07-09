// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
function make_album(artist:string,publish_Date:string, no_of_songs:number):any
{
let album : {Artist:string, Publish_Date:string, No_of_songs:number } = {Artist: artist, Publish_Date:publish_Date, No_of_songs: no_of_songs}

return(album);
}

let album1 = make_album('The Beatles', 'Abbey Road', 10);
let album2 = make_album('Pink Floyd', 'The Dark Side of the Moon', 11);
let album3 = make_album('Led Zeppelin', 'IV', 12)

console.log(album1);
console.log(album2);
console.log(album3);
