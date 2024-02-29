//forEach()
// mostly used loop/ prototype method of array
//The forEach() method of Array instances executes a provided function once for each array element.
/* 
 syntax 
  
  forEach(callbackFn)

  - callbackFn = A function to execute for each element in the array

  - The function is called with the following arguments:

    1) element / item
            The current element being processed in the array.

    2) index
          The index of the current element being processed in the array.

    3)array
          The array forEach() was called upon.

    
  - so call back function is like

  variableName.forEach( function (element, index, array) { 
    function definition })

  - u can even use this function in arrow function type

*/


const coding = ["js", "ruby", "java", "python"]

// 1st way - simple function

coding.forEach(function (val){
    // console.log(val)
});
/* 
 out- 
  js
  ruby
  java
  python
*/


//2nd way - arrow function

coding.forEach((val) => {
    // console.log(val)
})

// 3rd way - using fonction written before as a call back function

function printME(item){
    // console.log(item);
}
coding.forEach(printME)// by giving the reference of that function directly 


//4th way - using the parameters/ arguments of callbackFn i.e element, index, array

coding.forEach( (element, index, array) => {
    // console.log(element, index, array)
})
/* 
  out- 

    js 0 [ 'js', 'ruby', 'java', 'python' ]
    ruby 1 [ 'js', 'ruby', 'java', 'python' ]
    java 2 [ 'js', 'ruby', 'java', 'python' ]
    python 3 [ 'js', 'ruby', 'java', 'python' ]


- so it gives the value, index of that value and the whole array of each value in the array
- you can even use one parameter or two according to your use case.
*/



// 5th way - when there are many objects inside the array....and you want to get the values inside the object.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
    
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})
/* 
  out- 
     javascript
     java
     python
*/