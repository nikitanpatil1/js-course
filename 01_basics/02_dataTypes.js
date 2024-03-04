"use strict"; 
// after writing this it treats all js code as newer version

//code readability should be high

// ++++++++++++++++++++++++++

let name = "nikki"
let age = 18
let isLoggedIn = true

/* 
   how the data is stored in the memory and how you can access that data...
   on basis of this that data is classified into two types.
*/

/*

 + call by value
   -The original variable is not modified on changes in other variables.
   -Actual and copied variables will be created in different memory locations.
   -On passing variables in a function, any changes made in the passed variable will not affect the original one.

 + call by reference 
   -The original variable gets modified on changes in other variables.
   -Actual and copied variables are created in the same memory location.
   -On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.  

*/

//types of datatypes

//primitive (call by value)
/*
  - number => 2 to the power 53
  - null => standalone value
  - boolean => true/false
  - bigint
  - string => ""
  - symbol => unique (when you have to compare if the 
    component is unique 
    then this is use i.e to find uniqueness)
  - undefined => 
*/


//non primitive / reference (call by reference)

/* 
  - object 
  - (array and functions are also objects ) 
    so they are also non primitive...
  - typeof  
    array = object  
    function = functions object
*/


//typeof

console.log(typeof age)

/* 
 - typeof null = object
 - typeof undefined = undefined
*/