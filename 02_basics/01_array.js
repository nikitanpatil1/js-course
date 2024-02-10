// Arrays are collection of multiple items that are stored under a single variable name

// JS arrays are resizable and can contain a mix of different datatypes i.e u can add new item in already existing array... and array can be 
const myArr = [1, 2, "niki", "pat", true];

// JS arrays are not associative arrays i.e if u want to access an item from the array then u have to use its index number e.g- 
console.log(myArr[1]);

// JS arrays are 0 indexed i.e index numbering starts from 0

/* JavaScript array-copy operations create shallow copies i.e its a heap memory 

- shallow copy = is a copy whose properties share the same references as those of the source object from which the copy was made.

- deep copy =  is a copy whose properties do not share the same references as those of the source object from which the copy was made.
*/


// another ay to declare array
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2)

//Array methods
/* 
 there are many..but these are the most used ones

*/

const arr = [1, 2, 3, 4, 5]
arr.push(6); // out- [1, 2, 3, 4, 5, 6] add new item at the end

arr.pop(); // out- [1, 2, 3, 4, 5] removes the last item from array

arr.unshift(0); // out- [0, 1, 2, 3, 4, 5] adds new item to the start of array

arr.shift(); // out- [1, 2, 3, 4, 5] removes the first item from the array


console.log(arr)

