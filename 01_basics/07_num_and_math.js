
// Number

const balance = new Number(100); // this means ...new object is defined which is number type
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

console.log(balance.toString().length) // by using toString... u can even use string methods with number methods

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

// values/ properties in Math
/* 
 
*/

