"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor = "green";
if (alienColor === "green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (alienColor === "yellow") {
    console.log("The Player Just Earned 10 Points.");
}
else if (alienColor === "red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("unknown color");
}
alienColor = "yellow";
if (alienColor === "green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (alienColor === "yellow") {
    console.log("The Player Just Earned 10 Points.");
}
else if (alienColor === "red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("unknown color");
}
alienColor = "red";
if (alienColor === "green") {
    console.log("The Player Just Earned 5 Points.");
}
else if (alienColor === "yellow") {
    console.log("The Player Just Earned 10 Points.");
}
else if (alienColor === "red") {
    console.log("The Player Just Earned 15 Points.");
}
else {
    console.log("unknown color");
}
