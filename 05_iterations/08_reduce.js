// Array.prototype.reduce()
/* 

 -  The reduce() method is an iterative method. 
    It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. 
    Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. 
    The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().


 -  variableName.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
   )


*/

//eg 1 - using normal function to better understand it

const myNums = [1, 2, 3]

const numsRedu = myNums.reduce(function (acc, currval)  {
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval
}, 0)
console.log(numsRedu);//out- 6
/* 
 out- 
  acc: 0 and currval : 1
  acc: 1 and currval : 2
  acc: 3 and currval : 3
*/


// eg 2 - using arrow function

const myNums2 = [1, 2, 3]
const numsRedu2 = myNums2.reduce((acc, curr) => acc + curr, 0)
console.log(numsRedu2);//out- 6



//eg 3 - array having many objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 4000
    }
]

// item = each object inside the array
const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(cartTotal);// out- 10998