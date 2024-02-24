// for loop
// syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//eg-

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}// out- 0 1 2 3 4 5 6 7 8 9

//so how does this for loop works
/* 
  after giving the for keyword after that -
   1) variable initialization 
        i.e in this eg variable = index
    
   2) condition checking
          if the condition is true
           
   3) scope execution
        then everything inside the scope gets executed

   4)  increments the value of variable
         after the call just before the scope ends this happens

    5) then again repeats the same process from step 2 - 4 till the condition is false i.e unsatisfied/ unvalid.
*/