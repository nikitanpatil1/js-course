// Immediately Invoked Function Expressions (IIFE)
/* 
  it means you want to execute the function immediately as soon as you write the function..

  Q - but why do you want to do this..
      means why do you want to execute the function as soon as it is written...
      what is the need to do it ?

  ans - As many times there are variables declared inside 
        the global scope.. and there are even some functions over there and while we are writing something in that function...and we dont want that global variable to create some problem...
        so sometimes whatever we are declaring something in function it gets poluted by global scope...

        so these are two reasons
        1)we dont want polution from global scope..so we create one seperate scope 
        2) and we want that function to get immediately executed over there

*/
/* 
  - Many times problem occurs because of the global scope polution, and to remove that global scopes variables/ declarations polution we use IIFE
  - the function which imediately gets executed
  - 

  - syntax 
    ()()
    1st () - used to write the function definition
    2nd () - used to call that function i.e execution call
*/

(function chai(){
  console.log(`DB Connected`);
})();


// when you want to use iffe for more than two functions..then for the next function to get executed you will have to tell the first function to end its operation by adding ";" which tells to end that operation... then only ur second iife function will execute otherwise it will give error

//also comes under named iffe as "aurChai" is the name of that function
(function aurChai(){
  //named IIFE
  console.log(`DB Connected2`);
})();


// can even use => function
(()=>{
  //unnamed IFFE
  console.log(`DB Connected3`);
})();


// treat it as a normal function

((name)=>{//parameter
  //parameter passed IFFE
  console.log(name);
})("nikki");//argument