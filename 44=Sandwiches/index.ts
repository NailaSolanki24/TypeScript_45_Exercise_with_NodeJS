//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwiches(...items: string[]){

    console.log("\nMaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

makeSandwiches("Chicken", "Cheese", "Garlic Mayo", "Onion");

makeSandwiches("Bread", "Butter");

makeSandwiches("Bread", "Butter", "Chicken", "Cheese", "Garlic Mayo", "Onion", "Peprica", "Tomato");