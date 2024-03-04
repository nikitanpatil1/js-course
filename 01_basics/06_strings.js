
const name = "nikita";
const repoCount = 50;

// - "string interpolation" i.e the right syntax to inject variable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// - the use of writing like this is you can do many things on the go i.e can use any sring property there only ${name.toUpperCase()} 


// * another way to declare the string i.e using "new" keyword i.e you use the js object..new string is creating a new object for it
const gameName = new String('nikki');
console.log(gameName)



//string methods/ prototypes

/*

 .at(index)
 .charAt(index)
 .concat(str1, strn)
 .endsWith(searchString, endPosition)
 .includes(searchString, position)
 .indexOf(searchString)
 .lastIndexOf(searchString)
 .padEnd(targetLength, padString)
 .padStart(targetLength, padString)
 .repeat(count)
 .replace(pattern, replacement)
 .replaceAll(pattern, replacement)
 .slice(indexStart, indexEnd)
 .split(separator, limit)
 .startsWith(searchString, position)
 .substring(indexStart, indexEnd)
 .toLowerCase()
 .toString()
 .toUpperCase()
 .trim()
 .trimEnd()
 .trimStart()
 .valueOf()

 
*/