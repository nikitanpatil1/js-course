/* 
  - {} = scope
  - whenever {} comes with any function or any if...else then it is called scope/ scope of that program/ scope of that function/ if..else
  - 
   everything outside it is called global scope
    {
        everything inside this bracket is called block scope
    }
   global scope

  - everything from the global scope can be accessed by the block scope/ in the block scope
  - but everything from the blocked scope cannot be accessed by the global scope

  - var = global scoped
  - let & const = blocked scoped
*/


//eg- 

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a)// out- error
console.log(b)// out- error
console.log(c)// out- 30



//********************************************

//scopes in nested functions
// so whenever there are nested functions..at that time the child functions can access the parent functions variables
function one(){
    const username = "nikki"

    function two(){
        const website = "youtube"
        console.log(username);// out- nikki
    }

    console.log(website);// error

    two() // gets executed
}

one()// gets executed so console in two() gets printed


//scopes in nested if..else

if(true){
    const username = "nikki"
    if (username === "nikki"){
        const website = " youtube"
        console.log(username + website);// out - nikki youtube
    }
    console.log(website);// error
}
console.log(username);// error


//************* concept *********************

/* 
  1)functions can be accessed before its declaration
  2) variables should be declared first
  3) even functions written / declared in variable form cannot be accessed before declaration 
*/

//eg -

//1)

addone(5)
function addone(num){
    return console.log(num + 1)// out- 6
}

//3)

addTwo(5)
const addTwo = function(num){
    return console.log(num + 2)// out- error
}