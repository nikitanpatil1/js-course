// for...of loop
//[{}, {}, {}]

//syntax
//for (const iterator of object) { }
/* 
 
 const iterator of object =

  - const = used to assign the variable
  - iterator =  it is the basic i value which we 
                declare / even any variable name 
                i.e- i, num, value etc
  - of object/ object = it dosent means the "Object"
                        datatype... it actually means the on which item/ thing/ term/ variable/ on what you want to apply this loop on.

*/


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }



//++++++++++++++++++++++ Maps() ++++++++++

/* 
  - The Map ia a object that holds key-value pairs - remembers the original insertion order of the keys. 
  - Any value may be used as either a key or a value.
  - Map objects are collections of key-value pairs. - A key in the Map may only occur once; it is unique in the Map's collection
  

  // syntax
  1)create a new map
  const variableName = new Map()

  2) add key values in it using variableName.set()
  variableName.set( , )
*/

const myMap = new Map()
myMap.set("IN", "India")
myMap.set("USA", "United States of America")
myMap.set("Fr", "France")

// console.log(myMap);
/* 
 out- 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/


//applying for...of loop on Map


//when u want keys but u get key value pair in the array form
for (const key of myMap) {
    // console.log(key) 
}
/* 
 out- 
    [ 'IN', 'India' ]
    [ 'USA', 'United States of America' ]
    [ 'Fr', 'France' ]
*/


// but if you want them separately then - use [key, value] in the place of variableName

for (const [key, value] of myMap) {
    // console.log(key, ":-", value)
}
/* 
  out- 
     IN :- India
     USA :- United States of America
     Fr :- France
*/


// can u use for of loop to itterate an object ?
// - no as object is not iterable by using for of loop.. there are differnt types to iterate an object