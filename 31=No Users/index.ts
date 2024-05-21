//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = ["Salman", "Talha", "Admin", "Uzair", "Hassan"];

userNames = [];

if (userNames.length === 0){
    console.log("Your Array is empty, We need to find some Users!");
}

else {userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)

    }
    else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})

}
