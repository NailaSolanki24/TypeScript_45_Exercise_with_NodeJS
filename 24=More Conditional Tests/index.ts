//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings.

console.log("Equality test:" ,("Naila Solanki" as string) === "Naila Solanki");
console.log("Inequality test:" ,("Naila Solanki" as string) !== "Neha Uzair");

//Tests using the lower case function.

console.log("LowerCase test:" , "NAILA SOLANKI".toLowerCase() === "naila solanki");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

console.log("Equality test:" , 1000 === 1000);
console.log("Inequality test:" , (10 as number) !== 9);
console.log("Greater than test:" , 10000 > 100);
console.log("Less than test:" , 10 < 100);
console.log("Greater than and equals to test:" , 10 >= 10);
console.log("Less than and equals to test:" , 5 <= 10);

//Tests using "and" and "or" operators.

console.log("And operator test:", true && true);
console.log("Or operator test:" , true || false);

//Test whether an item is in a array.

const car = [1 , 2 , 3 ];
console.log("test number", car.includes(1));

// Test whether an item is not in a array.

const car1 = [1 , 2 , 3];
console.log("test number" , !car.includes(6));