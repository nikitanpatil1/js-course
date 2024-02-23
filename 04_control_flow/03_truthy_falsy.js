// truthy and falsy values

const userEmail = "nikki@gmail.com"
if (userEmail){// so here we have not used true value in condition...it directly assumes the string as the truthy value.. 
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

//truthy values = which are assumed true
/* 

 true
 "0" // i.e anything inside the string is truthy
 'false'
 " "
 []
 {}
 function(){}

 //just for GK
 false == 0
 false = ''
 0 == ''

*/


// falsy values = which are assumed false
/* 

 false
 0
 -0
 BigInt as it gives 0n
 ""
 null
 undefined
 NaN

*/


// how to detect if an Array is empty or not

const myArr = [];

if(myArr.length === 0){
    console.log("Array is empty")
}


// how to check if object is empty

const myObj = {}

if (Object.keys(myObj).length === 0){
    console.log("object is empty")
}