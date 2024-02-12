
const arr1 = ["a", "b", "c", "d"];
const arr2 = ["A", "B", "C", "D"];


// when you push() a array into an array
// if you use .push method
// arr1.push(arr2)
// console.log(arr1);// out- [ 'a', 'b', 'c', 'd', [ 'A', 'B', 'C', 'D' ] ]
// so if we push one array into another then that whole array gets combined as a single item in that first array i.e it took that array as a singel data
// u should not use it


// using concat()
const newConcat = arr1.concat(arr2);
console.log(newConcat);// out- [ 'a', 'b', 'c','d', 'A', 'B','C', 'D'] i.e it combines two arrays and returns new array...i.e to get answer you will have to assign new variable.
// there is even more easy method than concat...and you should use it.


// spread operator

const newSpread = [...arr1, ...arr2] // as you put ... then it no more remains array, its each elements have now become individual
console.log(newSpread) //out- ['a', 'b', 'c','d', 'A', 'B','C', 'D']


// .flat() 
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// one more method to solve complex array

const complexArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const newFlat = complexArr.flat(Infinity);
console.log(newFlat); // out- [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


// Array.isArray()
// used to find if its an array
console.log(Array.isArray("Nikkita")) // out- false

// to convert into array
// Array.from
console.log(Array.from("Nikkita")); // out- ['N', 'i', 'k','k', 'i', 't','a']

// you can even convert object into array
// but you cant just put the whole object i.e
console.log(Array.from({name : "nikki"}));// out- []
// it will give an empty array.. so when you want to convert obj to arr at that time you should specify if you want either "keys" or "values" to be converted into the array.

// Array.of()
//A set of elements to include in the new array object.Returns a new array from a set of elements.
const num1 = 100;
const num2 = 200;
const num3 = 300;

console.log(Array.of(num1, num2, num3)) // out- [ 100, 200, 300 ]
