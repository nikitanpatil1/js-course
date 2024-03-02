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

// by using filter method
const newNums = myNums.filter((num) => num > 4)
// console.log(newNums)
//out - [ 5, 6, 7, 8, 9, 10 ]

// but if you dont want to use filter method then you can execute it using different logic

//by using forEach
const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums2.push(num)
    }
})
// console.log(newNums2)
// out - [ 5, 6, 7, 8, 9, 10 ]


//this method also gives the same output so both methods are right .. what matters is the output.. so you can use any method as per ur comfort


//++++++++++++++++++ more about filters +++++++++++

// this is one of the type of values which you will get from database
// so how can u use filter on it ?

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Q1-  find all the books with genre = history
// ans- 

const userBooks = books.filter((bk) => bk.genre === "History")

// console.log(userBooks);
/* 
out- 
 [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]

*/


// Q2- books that are published after 1995 and genre = history
// Ans- 

const userReq = books.filter( (bk) => bk.publish > 1995 && bk.genre === "History")
console.log(userReq);



// so in this way u can use filter in many different ways.