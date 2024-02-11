
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

const

