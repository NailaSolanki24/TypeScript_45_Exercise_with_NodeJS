"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(Magicians) {
    Magicians.forEach((name) => console.log(name));
}
function make_great(Magicians) {
    return Magicians.map((name) => ` The Great ${name}`);
}
let magicians_names = ["Harry Poter", "Derren Brown", "Shin Lim"];
let great_magician = make_great(magicians_names);
show_magicians(great_magician);
