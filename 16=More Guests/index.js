"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestInv = ["Fozia", "Sidra", "Neha", "Saima"];
let refuseforDinner = guestInv[0];
console.log(refuseforDinner, "Cannot come for dinner.");
guestInv.splice(0, 1, "Sabeen");
console.log("Good news! We have found a bigger table for dinner.");
guestInv.unshift("Kiran");
guestInv.push("Urooj");
let middleIndex = Math.floor(guestInv.length / 2);
guestInv.splice(middleIndex, 0, "Shakeela");
console.log("Updated list of our guests.");
guestInv.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me.`));
