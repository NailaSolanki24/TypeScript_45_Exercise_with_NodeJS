//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestInv: string [] = ["Fozia", "Sidra", "Neha", "Saima"];
let refuseforDinner = guestInv [0];
console.log(refuseforDinner, "Cannot come for dinner.");
guestInv.splice(0, 1, "Sabeen");
console.log("Good news! We have found a bigger table for dinner.");

guestInv.unshift("Kiran");

guestInv.push("Urooj");

let middleIndex: number = Math.floor(guestInv.length / 2);

guestInv.splice (middleIndex, 0, "Shakeela");

console.log("Updated list of our guests.");

guestInv.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me.`));

console.log("Unfortunately,The new dinner table won't arrive on time,so I can only invite two guests to dinner with me.");

while(guestInv.length > 2) {
    let removedGuest = guestInv.pop();

    console.log(`Sorry, ${removedGuest} I can't invite you to dinner.`);
}

console.log("Invitations to the last two guests");

guestInv.forEach(lasttwo => console.log(`Luckily ${lasttwo}, You are still invited to dinner.`));

guestInv.pop();
guestInv.pop();

console.log("Empty List:" , guestInv);