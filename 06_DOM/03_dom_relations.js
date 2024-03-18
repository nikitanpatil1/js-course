// ref dom_relations.html file

// Q1) select parent element and find out what is inside it
// Ans-
const parent = document.querySelector('.parent')
console.log(parent)
//out- <div class="parent">…</div>

//***** properties of parent (there are many) *****

//1) .children  property  
// gives the children of that parent element

console.log(parent.children)
// out- HTMLCollection(4) [div.day, div.day, div.day, div.day]
// gives the output in the form of html collection 

// to access the elements from that collection
console.log(parent.children[1])
//out- <div class="day">Tuesday</div>


// as its an HTMLCollection so u cant apply array property or loop... but you can apply the classic for loop

for (let i = 0; i < parent.children.length; i++) {
    console.log (parent.children[i].innerHTML);
}
/*out- 
  Monday
  Tuesday
  Wednesday
  Thursday
*/


// changing the style of children inside parent
parent.children[1].style.color = "orange"


//2) .firstElementChild
// selects the 1st child

console.log(parent.firstElementChild);
//out- <div class="day">Monday</div>


//3) .lastElementChild
// selects the last child

console.log(parent.lastElementChild);
//out- <div class="day">Thursday</div>


// .parentElement
// to go to parent element from child

const child = document.querySelector('.day')
console.log(child)//out- <div class="day">Monday</div>

console.log(child.parentElement)// out- <div class="parent">…</div>
//gives the parent to which that child belongs to


// .nextElementSibling
console.log(child.nextElementSibling)
// out- <div class="day" style="color: orange;">Tuesday</div>
// gives the child next to the mentioned child




// ****** .childNodes and NodeList ********

/* 
 - The read-only childNodes property of the Node 
   interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. 
 - Child nodes include elements, text and comments.
 - It is important to keep in mind that childNodes includes :-
   all child nodes, including non-element nodes like text and comment. 
 - To get a collection containing only elements, 
   use Element.children instead.
 - To get data from node objects, use their properties. For example, to get the 
   name of the first childNode, you can use elementNodeReference.childNodes[0].nodeName.
*/

// .childNodes
console.log(parent.childNodes);
//out- NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]

/* 
 NodeList or childNodes is a complex tree structure
 though we have 4 values still it shows length as 9
 coz it even counts the empty spaces/line break which counts as a text node which is one of the node
*/