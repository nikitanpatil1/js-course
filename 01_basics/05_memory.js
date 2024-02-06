// 2 type so memomry

// stack 
/*
 - used in primitive datatypes
 - in this memory we get a copy of the variable declared 
 - changes and updates are done to the duplicate memory
*/
 
let myYoutubeName = "nikitas"
let anotherName = myYoutubeName;
anotherName = "patils"
console.log(myYoutubeName)
console.log(anotherName)

// out- value of myYoutubeName = nikitas, value of anotherName = patils


// heap 
/*
 - used in non-primitive datatypes
 - in this memory we get a refrence of the original value for the variable declared
 - changes and updates are done to the original memory
*/

let userOne ={
     email: "user@google.com",
     upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "nikita@google.com"; // used to access the value from the object

console.log(userOne)
console.log(userTwo)

// out- value of userOne and UserTwo = email: "nikita@google.com" upi: "user@ybl"
