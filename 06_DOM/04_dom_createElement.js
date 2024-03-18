
// Q) create a new element
// An-
// .createElement()

const div = document.createElement('div')
console.log(div)
// out- <div></div> (creates an empty div)


// Q) adding properties in that div i.e className/ id etc.
// An-

div.className = 'main'
div.id = 'mainId'
// out- <div class="main" id="mainId"></div>


// Q) to add different attributes i.e coustom attributes
//An-
// .setAttribute("key", "value")
// this should be mostly used to set attribute

div.setAttribute("title", "generated title")
//out- <div class="main" id="mainId" title="generated title"></div>


// Q) giving style to that element
//An-

div.style.backgroundColor = "green";
//out- <div class="main" id="mainId" title="generated title" style="background-color: green;"></div>


// Q) adding text/content in that element
// An- 

// so there are two methods

// 1st by using  .innerText / .innerHTML
// div.innerText = "Chai aur Code"

/*
as we know that innerText / innerHTML overwrites the value
- i.e whatever values are there..it selects and brings them first and then sets the value
- but when using the .set property i.e in the case of .setAttribute... it dosent brings that value first
it directly sets value inside it..which saves one rounturn
- so we dont have property like .setAttribute to set content/text
- so if we want to do that like the .setAttribue property the this is how we do it
*/

// 2nd method

//i) create textNode
const addText = document.createTextNode("Chai aur Code")
// so here we are not going inside its innerText here we are creating our own textNode
//ii) Adding that node in div
div.appendChild(addText)

// so both the methods are right its on you that what to choose..but there is a lot of debate that why to use this second method when that 1st method works fine and visa-versa



/* but as you may see that you have created this div
and its visible in console... 
but it is not visible/ is displayed on the page i.e document..
- it is because the div you have created is now inside a memory and has not come upon page
- and to make that div attached to the page..you will have to tell document to attach this child inside you..
- so that attaching also has a process
*/

// Q) attaching newly created child element to document
//An-

document.body.appendChild(div)

// so here we are telling that document to add one child inside its body..and now you must be able to see that div on page.