// for in loop
//syntax
/* 
  for (const key in object) {
} 
 
 const key in object = its meaning is same as the for of loop
*/

// using this loop we can iterate the Object
const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
/* 
 out- 
   js
  cpp
  rb
  swift
*/
//so it gives keys of object


//but if you want both key and values then- use variableName[key]
for (const key in myObject) {
    // console.log(`${key} written as ${myObject[key]}`);
}
/* 
 out- 
     js written as javascript
     cpp written as C++
     rb written as ruby
     swift written as swift by apple
*/



// can for..in loop be used for arrays?
// const programming = ["js", "rb", "py", "java"]
// for(const key in programming){
//     // console.log(key);
// }
/* 
out- 
0
1
2
3
-- so it gives the keys i.e index of array
-- so arrays have keys that start from 0 
*/

// to get the values from array then use-
// const programming2 = ["js", "rb", "py", "java"]
// for(const key in programming){
//     console.log(programming[key]);
// }
/* 
out- 

 js
 rb
 py
 java

*/


// can for...in loop be used on Map() ?
let myMap = new Map();
myMap.set("IN", "India")
myMap.set("USA", "United States of America")
myMap.set("Fr", "France")

for (const [key, value] in myMap) {
   console.log(key)
}// no output
for (const key in myMap) {
   console.log(key)
}// no output
for (const key in myMap) {
   console.log(myMap)
}// no output

// as map is not iterable so it cant be written in for...in loop in this way...you can apply loop on it ...but there are different ways to apply.




//++++++++++++ summary ++++++++++

// which loop to apply on what
/* 

 object = for...in loop
 arrays = for...of (but there are many loops that can be applied on array)

*/