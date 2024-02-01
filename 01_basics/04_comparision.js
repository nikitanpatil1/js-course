//comparision operators

/*
  
  >
  >=
  <
  <=
  ==
  !=

*/

console.log(null = 0); //false
console.log(null > 0); //false
console.log(null >= 0); //true /* in JS > and = works differently i.e comparison and equalto operator so in this example though null > 0 is false but as that comparison operator and equalto operator works differently so by combining them both it gives different result.... so first > converts null to 0 and so it shows true when null >= 0*/

// === strict check (dosen't only checks value but also its datatype)

console.log("2"== 2)// true (as it only checks the value) it converst
console.log("2"=== 2)// false (checks the value and datatype) it dosent