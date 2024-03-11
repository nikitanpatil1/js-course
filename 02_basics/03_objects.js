/* 
 there are 2 ways to declare the objects
 1) object literals
 2) object constructor
    (objects made by constructor are singleton 
     i.e this object is only one of it's type and if you create it by different way then its not singleton...coz its multiple instances are created.)
*/
/*
  object.create 
  - this is also a way to create a obj and this is created through constructor method 
    and in it only the singleton is created
*/



// ++ object literals ++

const jsUser = {
    name : "Nikki",
    age : 18,
    location : "jaipur",
    email : "nikki@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
} // this is how an object is declared

// ++ to access the object ++
// you can either use the "." method or "[""]" method
console.log(jsUser.email)
// but u should not use this method

console.log(jsUser["email"])
/* u should use this method 
  as u can even access the key which is written with "" eg "name" : "nikki"
*/



//++ how to use symbol in objects ++

// how to declare a symbol
const mySym = Symbol("mykey1")// 1st declare the Symbol

// so if you want to declare it in obj or if you want to use it as a key in object then how to do it
const newSymb = {
    [mySym] : "mykey1" // this is how you can define
}// 2nd create the obj

console.log(newSymb[mySym])// this is how you can access



// ++ to change values in obj ++
jsUser.email = "nik@gmail.com"
console.log(jsUser);

// to lock value in obj.. by using freeze 
 
 Object.freeze(jsUser)
// - by doing this u can't change the value of that key after this



// ++ declaring function in obj ++

jsUser.greetings = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greetings())

//when you want to reference the same obj then use "this.(key of obj)"
jsUser.greetings2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greetings2());