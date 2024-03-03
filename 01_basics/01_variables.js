const accountId = 144553;
let accountEmail = "nikki@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* -you can update let and var
   -only var can be redefined
   -const can neither be updated nor redefined
   -never use var, as  it gives issue in block and functional scope 
    i.e if same variable name is present at two places that is one inside the block and one outside the block, 
    then even if we changed the variable inside the block... 
    the variable outside the block also used to get updated even tho we didn't wanted it to change.
   -in js you can allot memory to an variable without even declaring it. but don't!  
*/