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

document.getElementById('owl').addEventListener('click', function(){
    alert('owl clicked again')
}, false)



// attachEvent()
// this is also a method which is used at the place of addEventListener
// it was in use in early times 

// jQuery - onEventListener
// its the event in 


// **** Event Objects ****
/* 
 Sometimes, inside an event handler function, you'll see a parameter specified with a name such as "event", "evt", or "e". This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
*/