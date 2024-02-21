// this keyword
// this = refers to current context
// when you want to reffer the current context i.e when you want to access the variables/content within {} 
// i.e any current context from global scope or block scope respectively

const user = {
    username: "nikki",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
user.welcomeMessage()// out- nikki, welcome to website

//this key word if given for the global scope of the node environment the it gives empty object.. as there is nothing in the current context
console.log(this); // out- {}

// but when used in the browser it gives window as the current context
console.log(this); // out- Window{and lots of values of window}

// the this context only works in object... you wont be able to use in function i.e this in function doesnt helps in accessing the current context from the function
function chai(){
    let username = "nikki"
    console.log(this.username);// out- undefined
}
chai()

// even when you declare the function in the variable format, it will still give the same output
const aurChai = function(){
    let username = "nikki"
    console.log(this.username);// out- undefined
}
aurChai()

// same even in arrow functions this keyword doesnt works




// ++++++++++++++++ arrow function +++++++++++++++++++

// basic syntax of arrow function  
/* 
   1) () => {}
   2) you can even hold it inside a name i.e variable
      const nameOfFun = () => {}
*/
//2) basic arrow function
const addTwo = (num1, num2) => {
    return console.log(num1 + num2)// out- 7
}
addTwo(3, 4)


//3) implicit return 
// in it u dont have to use {} and also the 'return' word
// implicit means it assumes/accepts that you dont have to write the return key word, as you have one line statement

// 1st syntax
const addThree = (num1, num2, num3) => console.log(num1 + num2 + num3)

addThree(2, 4, 6) // out- 12

//2nd syntax 
// in it you wrap content after the arrow in parenthesis i.e () => ()
const addOne = (num1) => console.log(num1 + 1)
addOne(2)// out- 3


// *** if you wrap the content after the arrow in {} then you will have to write the return keyword i.e () => {return value}
// *** but if you use () then no need i.e () => ()
// so implicit return is when you dont write return keyword
// while explicit return is when you have to add/write the return keyword explicitly

// how to return object in 2nd syntax of implicit return
const impObj = () => ({username: "nikki"})
console.log(impObj())//out- { username: 'nikki' }