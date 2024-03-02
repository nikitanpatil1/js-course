// Array.prototype.map()
/* 
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

- The map() method is an iterative method. 
  It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

-syntax

variableName.map(callbackFn)


*/

//it acts same as filter
// you can also do this same using for each... but as discussed in last chapter you can use any method..as whats imp is output.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => num + 10)
console.log(newNums);
/*out- [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

// this dosent returns only those who have condition true..this condition is in filter



// chaining using map()
// using two - three methods directly together is called
//eg-

const num = [1, 2, 3, 4, 5]

const num1 = num
      .map( (num) => num * 10)// so just using 1 map comes under normal map function out- [10, 20, 30, 40, 50]

      .map((num) => num + 1)// using more than 1 map at a time comes under chaining method out- [11, 21, 31, 41, 51]

      .filter((num) => num >= 30)

console.log(num1);// final out- [ 31, 41, 51 ]
// so in chaining the final outcome by applying all the methods and conditions used in chaining.