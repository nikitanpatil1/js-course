// for loop
// syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//eg-

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }// out- 0 1 2 3 4 5 6 7 8 9

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


// if.. else in for loop

// for (let i = 1; i <= 10; i++) {
//      const element = i;
//      if (element == 5){
//           console.log("5 is best number");
//      }
//      console.log(element);
// }//out- 1 2 3 4 5 is best number 5 6 7 8 9 10



// loop inside the loop

// for (let i = 1; i <= 1; i++) {
//       console.log(`Outer loop value: ${i}`);
//      for (let j = 1; j <= 10; j++) {
//          console.log(i + ' * ' + j + ' = ' + i * j);
//      }   
// }
/* 
  Outer loop value: 1
   1 * 1 = 1
   1 * 2 = 2
   1 * 3 = 3
   1 * 4 = 4
   1 * 5 = 5
   1 * 6 = 6
   1 * 7 = 7
   1 * 8 = 8
   1 * 9 = 9
   1 * 10 = 10

*/


//arrays in for loop

// let myArray = ["nikki", "Pikki", "Kikki"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//      const element = myArray[index];
//      console.log(element)
// }



//keywords in loop
// 1) break
//2)continue

//1)break
// used to break the loop i.e to stop it then and there only as soon as that condition is executed

// for (let index = 1; index <= 6; index++) {
//      if(index == 5){
//           break;
//      }
//      console.log(index);
// }// out- 1 2 3 4


//2) continue
// used to continue the loop even after the condition is executed.. it prints everything except the place where the condition is applied...at that place the conditions terms are printed

for (let index = 1; index < 6; index++) {
     if(index == 3){
          console.log("3 briii");
          continue;
     }
     console.log(index)
}
/* 
out-
 1
 2
 3 briii
 4
 5
*/

// there are many for loops.. such as for..of for..in loop etc