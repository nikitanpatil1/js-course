/* 
 - jS ke andar jintne bhi events hote hai vo sequentially he run hoti hai.. kuch exceptions hote hai..
 - JS ek sequentially run language hai... but sometimes it dosent follows or slightly moves to asynchronous
 - like this only exceptions are these browser events..
 - these events gets envoked at any activity i.e mouse move, mouse click, drag and drop etc.
 - so there are many
*/



// Q) add an onclick event to an element

// 1st method
// applying it directly on that element in its html tag itself

/*
  <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onclick="alert('owl')"></li>

*/

// this is a method that should be avoided in JS . its okay in react


// 2nd method
// applying onclick by using .onclick 

// document.getElementById('owl').onclick = function(){
//     alert('owl clicked')
// }

/* 
 this method works but the main problem is that when the onclick event is applied on the id..
 then there may be some problems in that onclick event.
 coz by applying on id u dont get more information.
 - so u should event listeners  bcoz they just dont provide the onclick functionality but also gives you the ability of propogation

 - propogation = 

 - so this method is right but gives you less features
*/


// 3rd method
// using addEventListener('click', function(){}, false)
// the third parameter false is default and its no need to write it
// but u should know that why it is used

// document.getElementById('owl').addEventListener('click', function(){
//     alert('owl clicked again')
// }, false)



// attachEvent()
// this is also a method which is used at the place of addEventListener
// it was in use in early times 

// jQuery - onEventListener
// its the event in 


// **** Event Objects ****
/* 
 Sometimes, inside an event handler function, you'll see a parameter specified with a name such as "event", "evt", or "e". This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
*/

// document.getElementById('owl').addEventListener('click', function(e){
//       console.log(e)
// }, false)

// out- PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

/* 
 - so in output you get PointerEvents which is an object so in it you get many values such as buttons, bubbles, clients x and y etc. source elements and its attributes, childNodes, children etc.
 - so u get many events in it.. events such as browser events and environment events.
 - environment events such as where did mouse clicked, what was the position of mouse etc. all these details
 - in interviews questions such as what was the view, height and width of window at the time it was clicked
 - 
*/

/*
 basic events to study

 - type (keyboard type event, mouse event etc.)
 study about this different types

 - timestamp (time date activties..how to change them and all)

 - defaultPrevented (using this you can change/stop  the default behaviour of any thing)
  mostly used in forms, anchor tag etc.

 - target 

 - toElement

 - srcElement

 - currentTarget

 - clientX, clientY, screenX, screenY etc

 - altkey, ctrlkey, shiftkey, keyCode

*/

//******* Event Propagation *******

/*
 document.getElementById('').addEventListener('click', function(){}, false)
*/

/* 
 there are 2 context of event propagation

 1) event bubbling
 -  the most used in market, or the project uses the default which is 'false' as the 3rd parameter in eventListener
 - which is called as event bubbling
 - so the event propagation in 
   event bubbling = bubling up
 - as bubble is which goes from bottom to top (i.e smaller => bigger)
 - it goes from inside to out side
   i.e from inner element => outer element => outer element


 2)event capturing
 - when used 'true' as the 3rd parameter in eventListener
 - which is called as event capturing
 - so the event propagation in 
   event capturing = capturing up
 - as capturing is which goes from top to bottom (i.e  
   bigger => smaller)
 - it goes from outside to inside side
   i.e from outer element => inner element => inner element

*/

// egs- 

// document.getElementById('images').addEventListener('click', function(e){
//   console.log("clicked inside the ul")
// }, false)
//out- clicked inside the ul

// document.getElementById('owl').addEventListener('click', function(e){
//   console.log("clicked on owl")
// }, false)
/* 
out- clicked on owl
     clicked inside the ul
*/

/*so in these eg it goes like
 img => li (its targeted id) => ul (its targeted id)
 so when we clicked on owl, as it consists of 2 eventListners and the 3rd parameter being "false" i.e event bubbling. 
 so 1st the li id event got displayed and then the main ul id event.
*/

// egs 2 -

// document.getElementById('images').addEventListener('click', function(e){
//   console.log("clicked inside the ul")
// }, true)
//out- clicked inside the ul

// document.getElementById('owl').addEventListener('click', function(e){
//   console.log("clicked on owl")
// }, true)
/* 
out- clicked inside the ul
     clicked on owl
*/


//****** stop the event bubbling/ stop event propagation from passing on/ carry forwarding ******

// event.stopPropagation()

//eg-

// document.getElementById('owl').addEventListener('click', function(e){
//   console.log("clicked on owl")
//   e.stopPropagation()
// }, false)

// out-  clicked on owl
// so by using it. now the event bubble hoke upper ke element mein nahi jayega.
// so we only got the 1st listener output




// ********** preventDefault() ******

// event.preventDefault()

// document.getElementById('google').addEventListener('click', function(e){
//   console.log("google clicked")
//   e.preventDefault()
//   e.stopPropagation()
// }, false)

//out- google clicked

/* 
 - it avoids the default function
 i.e here im this case.. as when we click on the google link then by default it open ups the google page.
 but when we add prevent default to that function..and when we click on the google link then the default function dosent takes place.
 and the function which we apply to it by using that property that function gets executed.

*/

// **** .target ****
// value of event
// target is the element which is clicked. then it targets it



//**** .tagName *****
// value of event
// tagName gives the name of that tag





//********************************************

// Activity

// Q) when you will click on any image..then that img should disapear/ get removed from the display page.

// ans-

document.querySelector('#images').addEventListener('click', function(e){
  if(e.target.tagName === "IMG"){
    let imgRemovel = e.target.parentNode
    imgRemovel.remove() //1st way to remove

    // imgRemovel.parentNode.removeChild(imgRemovel)
    /* 2nd way 
      imgRemovel gives = li (as its img parent node)
      .parentNode gives = ul (as its il parent)
      .removeChild = i.e li ( which is ul child)
    */

  }

}, false)



