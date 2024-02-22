// always the whole code should not execute...whole code should run on conditional base..so this is called the control flow or logic flow

// if statement
//syntax
if(condition){

}// so the condition should be true then only the internal code inside the scope will execute...but if it is false then it will never go under the condition.

if(2 != 3){
    console.log("executed");
}
//to evalute the true in the condition..you will have to check conditions by comparing them..so there are the comparison operators which are used to compare
/* 
 <
 >
 <=
 >=
 ==
 ===
 !=
 !==

*/


// if...else statement

const temperature = 41;
if(temperature === 41){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}


//short hand of if

const balance = 1000
if (balance > 500) console.log("test"); // implicit scope

// or

if (balance > 500) console.log("test"),
 console.log("day");// u can even write it like this but you should not..as its immature way of writing code



 // if...else if...else

 const balance2 = 1000

 if (balance2 < 500){
    console.log("less than 500");
 }else if (balance2 < 750){
    console.log("less than 750");
 }else if(balance < 900){
    console.log("less than 750");
 }else{
    console.log("less than 1200");
 }


 //++++++ logical Operators ++++
 /* 
   && and = both conditions/ all conditions should be true
   || or  = any one condition can be true
   ! not  = opposite
*/

 //eg-

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
//can even check multiple and statement by adding && for each

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}
//can even check multiple or statement by adding || for each

