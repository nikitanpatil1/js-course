// how to declare the object with the help of constructor

//types to declare the object

// 1) singleton i.e new Object()
const user = new Object();

// 2) non singleton
const user2 = {} 

// then adding values

user2.id = "123abc";
user2.name = "nikki";
user2.isLoggedIn = false;

console.log(user2)



// ++ objects in objects i.e as value ++

const regularUser = {
    email: "some.gmail.com",
    fullname: {
        userfullname: {
            firstname: "nikki",
            lastname: "patt"
        }
    }

}// so its completely possible, completely accessable if you want to give or access values in this way

console.log(regularUser.fullname)// out- { userfullname: { firstname: 'nikki', lastname: 'patt' } }
// and if you want to access more deep objects then just put "." and then the key u want to access



//optional chaining (for later)



// ++ to combine object.. 2 ways ++
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// 1) Object.assign()
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)// out- { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/* 
 - {} = acts as an target and the objs which we want to combine acts as source...
        i.e all the value will go in that empty parameter
 - {} this is an optional parameter in this type, but you should use or give it.. 
   as {} this indicates that all the values will get combined and its guaranteed that the result/output will be that only
 - should not use this method mostly
*/

// 2) spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4) // out- { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// u should use this method.. as its eays/ simplified.

// ******

// so when values come from database..they come in this form..i.e array of objects 
const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
]

// can access values by normal method
users[1].name;

//******

// +++ object methods +++

// there are many..these are some of them

console.log(Object.keys(user2))//out- [ 'id', 'name', 'isLoggedIn' ]
//it gives them in the form of array..so it becomes easy to apply loops on them or use them anywhere ...so its imp

console.log(Object.values(user2))// out- [ '123abc', 'nikki', false ]


console.log(Object.entries(user2))// out- [ [ 'id', '123abc' ], [ 'name', 'nikki' ], [ 'isLoggedIn', false ] ]
// it gives arrays inside an array as out..it groups the key value pair into a many single array... its not used mostly but methode hai dekhna to padega 


console.log(user2.hasOwnProperty('isLoggedIn'))// out- true
// used to find if that property exists in the object or not


//*********************************** 

// object destructuring
// used to print/extract the value from the object in simplified way

//In the example below, we destructure both the name and age properties from the user object.
const user1 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { name, age } = user1;// you can extract 1, 2 or how many values you want to extract

console.log(name, age); // Output, Alex 43