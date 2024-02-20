//function is written as
function functionName(){
    return console.log("hello")
}

functionName // just using the name gives the referance of the function
functionName() // but to execute the function you have to put the parenthesis in front of the functionName


function addTwoNumbers(num1, num2)// the numbers ur using you should define them / pass them in these parenthesis first then only it will execute
// when you make the function defination, and for that you take any type of input in these parenthesis, then those inputs are called parameters
{
   return console.log(num1 + num2) // when you want to store the value of the function then you use return
   // i.e when you return then only you can store that value in any variable.. otherwise u cant.

   console.log("hello world")// anything written after "return" neither gets executed nor gets printed
}
addTwoNumbers(2, 4)// to make the code run you should give the arguments in these parenthesis
// when you call the function, and for that the values you pass in these parenthesis, then those values are called arguments 



// rest operator (...nameOfValue)
// its just like spread operator.. but here it is used to save the arguments in one place... i.e when you dont know how many number of arguments will be present in the function

//eg1
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // out- [ 200, 400, 500, 2000 ]


// eg2
function calculateCartPriceEg2(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))// out- [ 500, 2000 ] as 1st 2 arguments go into 1st 2 parameters


//********************************************** 

// objects in function

const user = {
    username: "nikki",
    price: 1000000
}

function handleObject(anyobject){
    return console.log(`username: ${anyobject.username} and price: ${anyobject.price}`)//when u want to access the value from object in function then you have to write it in such way - parameterOfFun.keyOfObj that u want to access
}

handleObject(user) // out- username: nikki and price: 1000000


// you can directly pass the object in function argument..without creating it seprately
// eg2 
function handleObject2(anyobject){
    return console.log(`username2: ${anyobject.username2} and price2: ${anyobject.price2}`)
}

handleObject2({
    username2: "patt",
    price2: 2000000
})//out- username2: patt and price2: 2000000



//********************************************** 

// arrays in function

const myArray = [200, 400, 600, 800]

function myArraySecondValue(anyArray){
  return console.log(anyArray[1])
}
myArraySecondValue(myArray)//out- 400



// you can directly pass the array in function argument..without creating it seprately

// eg2 
function myArrayThirdValue(anyArray){
    return console.log(anyArray[2])
}
myArrayThirdValue([200, 400, 600, 800])//out- 600