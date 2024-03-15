//Document Methods

// 1) to get particular class from document
// getElementByClassName
// document.getElementsByClassName('heading')

// 2) to get particular id from document
// getElementById

// a) getting id title
// document.getElementById("title")
// /*
// out-
// <h1 id="title" class="heading"> DOM learning on Chai aur code </h1>
// */

// // b)
// document.getElementById("title").getAttribute("id")
// //out- 'title'

// // c)
// document.getElementById('title').getAttribute("class")
// // out- 'heading'

// //d)
// document.getElementById('title').setAttribute('class', 'test')
/* 
 out- it will overwrite the exsisting class..by setting this new value 
 (but think so this only works in inspect element webpage html code.. 
 coz it dosent change the value of class in the vscode file)
*/



// applying style elements to particular id
// .style.(property)

const title = document.getElementById('title')

// a)
title.style.backgroundColor = 'green'

// b)
title.style.padding = '15px'

// c)
title.style.borderRadius = '15px'

// like this u can apply any style property



// +++++++++ textContent, innerHTML, innerText +++++++++
// to get content of that particular id

// 1)  .textcontent
title.textContent
// out-  'DOM learning on Chai aur code'

// 2) .innerHTML
title.innerHTML
// out-  'DOM learning on Chai aur code'

// 3) .innerText
title.innerText
// out- 'DOM learning on Chai aur code'


/* 
so what is the difference between these 3 as they all give same output ?
*/

// a) difference between textContent and innerText
// ans- 

title.textContent
// out- DOM learning on Chai aur code test text
// so text content shows whole content which is present in that tag (even tho what ever property is applied on it)
// when you want even hidden content at that time use this

title.innerText
// out- 'DOM learning on Chai aur code'
// while innerText only shows the content which is visible on the document/ webpage (as per the property applied on it)
// when you only want the visual text then use this


// b) innerHTML
title.innerHTML
// out- DOM learning on Chai aur code <span style="display: none;">test text</span>
// it not only gives the content but it also gives the html property which is present in that content
// it supports html tags


// ++++++++++ querySelector, querySelectorAll ++++++++

// 1) document.querySelector
// when a query is requested it gives the 1st query of all which is present on that document

// eg-
document.querySelector('h2')
/* 
 out- <h2>Lorem ipsum dolor sit.</h2>
*/
// gives the first h2 of that document