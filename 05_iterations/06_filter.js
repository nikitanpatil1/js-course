// forEach dosent returns the value in function
// so sometimes you want to perform some operation on that "each value"...but sometimes you just want to return that value or you just want to conditionally check it
// so in those case you cant use forEach

// so in that case "filter()" is used return value/ to just check it conditionally



// ++++++++++++++  Array.prototype.filter() ++++++++

/* 

- The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

- A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.


variableName.filter( callbackFn )

*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num) => num > 4)