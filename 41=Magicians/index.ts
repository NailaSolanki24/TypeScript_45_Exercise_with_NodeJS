//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(Magicians: string[]){
Magicians.forEach(name => console.log(name));
}

let magicians_names = ["Harry Poter" , "Derren Brown" , "Shin Lim"];

show_magicians(magicians_names)