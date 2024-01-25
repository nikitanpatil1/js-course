//conversions

// let variablename1 = Number(variablename1)
/* "33" => 33
   "33abc" => NaN
   true => 1; false => 0
*/


// let variablename2 = String(variablename2)

// let variablename3 = Boolean(variablename3)
/*
  1 => true; 
  0 => false
  "" => false;  
  "niki" => true
*/



//operations

/*

  +
  -
  *
  **
  /
  %

*/

/* console.log("1" + 2)  => 12
   console.log(1 + "2")  => 12
   console.log("1" + 2 + 2)  => 122
   console.log(1 + 2 + "2")  => 32
*/

// but never write like this use () to seperate operations you want to run first  i.e  console.log( (3+4) * 5 % 3)



// Prefix and Postfix

/*1) increment
    
   postfix++ : increments and returns the value before incrementing i.e prints original value and then increments it.
   ++prefix : increments and returns the value after incrementing i.e increments the value and prints the incremented value.
*/
  
//postfix
  let x = 3;
  let y = x++;
  console.log(`x:${x}, y:${y}`);
//out: x:4, y:3
  
//prefix
  let a = 3;
  let b = ++a;
  console.log(`a:${a}, b:${b}`);
//out: a:4, b:4
  
  
/*2) decrement

  postfix++ : decrements and returns the value before decrementing i.e prints 
  original value and then decrements it.
  out: x:2, y:3 when x= 3


  ++prefix : decrements and returns the value after decrementing i.e decrements the value and prints the decremented value.
  out: x:2, y:2 when x = 3
*/