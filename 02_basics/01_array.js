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
  .toString()
  .join(separator)
  .pop()
  .push(element1, element2, elementn)
  .shift()
  .unshift(element1, element2, elementn)
  delete object[property]
  .concat(value1, value2, valuen)
  .sort()  
  .sort(compareFn)
  .reverse()
  .splice()
  .slice(start, end)






*/

const arr = [1, 2, 3, 4, 5]
arr.push(6); // out- [1, 2, 3, 4, 5, 6] add new item at the end

arr.pop(); // out- [1, 2, 3, 4, 5] removes the last item from array

arr.unshift(0); // out- [0, 1, 2, 3, 4, 5] adds new item to the start of array

arr.shift(); // out- [1, 2, 3, 4, 5] removes the first item from the array

arr.includes(5); // out- true  it is used to ask question/ to check values in arrays

arr.indexOf(5);

arr.join(); // out- 1,2,3,4,5  converts the array on which applied to string by the way its called to join 
  
const myArr3 = new Array(1, 2, 3, 4, 5) 
console.log(myArr3.slice(1, 3)) // out- [2, 3] and original array [1, 2, 3, 4, 5] i.e it prints the selected range and dosent manipulates original array.
console.log(myArr3)
console.log(myArr3.splice(1, 3)) // out- [2, 3, 4] and original array [1, 5] i.e it prints the range including the next item also and it dose manipulates the original array.
console.log(myArr3)
 