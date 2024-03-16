//Document Methods

// 1) to get particular class from document
// getElementByClassName
// document.getElementsByClassName('heading')

// 2) to get particular id from document
// getElementById

// a) getting id title
document.getElementById("title")
/*
out-
<h1 id="title" class="heading"> DOM learning on Chai aur code </h1>
*/

// b)
document.getElementById("title").getAttribute("id")
//out- 'title'

// c)
document.getElementById('title').getAttribute("class")
// out- 'heading'

//d)
document.getElementById('title').setAttribute('class', 'test')
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


// a) get id and class as a query selector
document.querySelector('#title')
document.querySelector('.heading')

// you can give any selector... all css selectors..and html inputs
//eg- 
document.querySelector('input[type="password"]')

document.querySelector('p:first-child')


// when you want to change the bg-color of 1st li item from ul then -

document.querySelector('ul')//out- <ul>…</ul>

const myul = document.querySelector('ul')

myul.querySelector('li')//out- <li>…</li>

const turnGreen = myul.querySelector('li')

turnGreen.style.backgroundColor = "green"//out- 'green'

// so you can manipulate by giving values like this




// 2) document.querySelectorAll()
// when a query is requested it gives all query which is present on that document

//eg-
document.querySelectorAll('li')//NodeList(3) [li, li, li]

// it gives all the list items present on that document in NodeList format...which looks like an array list.. but it's not.

// so when you want to apply some value to the items inside that node list then you should mention to which item you want to apply that particular thing

const liList = document.querySelectorAll('li')
liList[1].style.backgroundColor = 'white'
liList[1].style.color = "green"
//[1] = this 1 indicates the item which is present on that index


// so even though there is just one value present of the requested query on the document.. at that time also you should mention the index while giving the property to the single particular element

//eg-
const h1Selector = document.querySelectorAll('h1')
// so here our document has only one h1
h1Selector // out- NodeList [h1#title.heading] tho its just single item then also it gives NodeList so do mention the index no
h1Selector[0].style.color = 'pink'

//can apply forEach as it has that value in its method


// ++++++++++++++

// 1) getElementsByClassName()

//when getting li elements by className it gives it in the form of HTMLCollection

document.getElementsByClassName('list-item')
// out- HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// cant apply forEach


//********** converting HTMLCollection to Array

// by using "Array"
// there is a method in array ".from" which is used to conver that value from where into the array

const tempClass = document.getElementsByClassName('list-item')

Array.from(tempClass) // out- (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// converts into the array by giving it access to all the array methods.

// now you can use forEach

const myConvertedArray = Array.from(tempClass)

myConvertedArray.forEach(function(li){
    li.style.color = 'orange'
})

// this is how you use html collection and this is how values are

// so remember whenever you will use querySelector, className... this is how u take the values and change them