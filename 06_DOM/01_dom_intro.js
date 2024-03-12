// Document property
// there are many properties.. these are some of them


//ducument.baseURI
// gives the base URI of the document/page
console.log(document.baseURI)


// document.links 
// gives all the links present in the document
console.log(document.links)
/* 
 so the links we get are in the HTMLCollection form...
 which look like array but are not
 - HTMLCollection, NodeCollection these can be converted into array...but by default they are not an array
*/

//document.link[number of link that u want to access]
console.log(document.links[2])
//gives the 2nd link from that document


//selector elements


// document.getElementById('the id of the element u want to access')
document.getElementById('firstHeading')

/* 
    u can even do the manipulation by putting "." and then adding the property
    document.getElementById('').
*/

document.getElementById('firstHeading').innerHTML = "<h1>chai aur code</h1>"

// .innerHTMl = "replacement value"
// using this you can manipulate the html code of that specific id/class.