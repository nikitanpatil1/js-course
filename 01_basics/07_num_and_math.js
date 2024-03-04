 
// Number

const balance = new Number(100); 
// this means ...new object is defined which is number type
console.log(balance)


// Number method-prototype
/*

  .toString()

  .valueOf()

  .toExponential(fractionDigits)

  .toFixed(digits)

  .toLocalString()

  .toPrecision(precision)
  
*/

console.log(balance.toString().length) 
// by using toString... u can even use string methods with number methods

console.log(balance.toFixed(2));// out- 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) // out- 124 gives precise value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //out- 10,00,000



// Direct attached properties of number
/* 
 there are many but some
 .MAX_VALUE
 .MIN_VALUE




*/




// ++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

// it's a library that comes with JS by default
// it's also an object

// properties & values in Math
/*
 - property (there are many) 
   Math.PI 

 - Methods (these are some of them)
   x = number/value

  Math.abs(x)
  Math.round(x)
  Math.ceil(x)
  Math.floor(x)
  Math.sqrt(x)
  Math.pow(base, exponent)
  Math.min(value1, 2, valuen)
  Math.max(value1, 2, valuen)
  Math.random()
  Math.

*/

console.log(Math.abs(-4)); //out- 4
console.log(Math.round(4.6)); //out- 5
console.log(Math.ceil(4.2)); //out- 5
console.log(Math.floor(4.9)); //out- 4
console.log(Math.min(4, 3, 5, 8)); //out- 3
console.log(Math.max(6, 2, 7, 3)); //out- 7


// +++++++++ Math.random()

// its value will always be between 0 - 1
console.log(Math.random()); 

// if you want the values in specific range then you multiply that value with the number till where you want it to be.
console.log(Math.random()*6); 

// if u dont want the value to start from 0.. then do +1 in the total value
console.log((Math.random()*6) + 1);

// if you want the output to be single digit value then add floor property
console.log(Math.floor((Math.random()*6) + 1));

// u can use this method by defining the start and end value
const min = 10; // start value
const max = 20; // end value

console.log(Math.floor((Math.random()*(max - min)) + 1) + min)