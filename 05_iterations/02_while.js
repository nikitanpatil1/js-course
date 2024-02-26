// while loop
//syntax
while (condition) {
    
}


//same as for loop...but just syntax structure is different

let index = 0;// variable initialization
while(index <= 5)//condition
{
    console.log(`value of index is ${index}`)
    index += 2//itteration i.e terminates the loop..there is an exit to the loop..end..otherwise it will run infinit
}
/* 
 out- 
     value of index is 0
     value of index is 2
     value of index is 4
*/


// array in while loop

let myArray = ['flash', 'batman', 'superman' ]
let index = 0
while(index < myArray.length){
    // const index = myArray[index];
    console.log(myArray[index])
    index += 1
}
/* 
  out- 
     flash
     batman
     superman
*/

// do...while loop
// first the loop gets executed then the condition is checked
//syntax
do {
    
} while (condition);


let score = 1
do{
    console.log(`score is ${score}`)
    score++
}while(score <= 5);
/* 
 out- score is 1
      score is 2
      score is 3
      score is 4
      score is 5
*/


// what if the value of score dosent match the condition ? then you will think that this wont get executed but....

let score2 = 11
do{
    console.log(`score is ${score2}`)
    score2++
}while(score2 <= 5);// out- score is 11
// so as first the loop gets executed so you get the value of score and then it checks the condition.