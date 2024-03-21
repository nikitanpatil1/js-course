//Q) creating and adding a new element using a function

// 1st method 
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("typescript")
// this method is ok but creats optimisation issue

// 2nd method (using optimise way)
function addOptiLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("php")

// in this method u dont need to traverse the whole tree
//so both the methods are same just 2nd one is more optimised


// *** Edit Values ******

//1) using .innerHTML
const secondLang = document.querySelector("li:nth-child(2)")
secondLang.innerHTML = "Mojo"
/*out- Javascript
 Mojo
 typescript
 php
*/


//2) by creating new element and using .replaceWith()
const newli = document.createElement('li')
newli.textContent = "ruby"
secondLang.replaceWith(newli)
/*out- Javascript
 ruby
 typescript
 php
*/

//3) by using .outerHTML
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>C++</li>'
/*out- C++
 ruby
 typescript
 php
*/


//*** remove Values ***
const lastLang = document.querySelector('li:last-child')
lastLang.remove()
/*out- C++
 ruby
 typescript

*/