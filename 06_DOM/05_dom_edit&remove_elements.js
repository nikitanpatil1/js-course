//Q) creating and adding a new element using a function

// 1st method 
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
// this method is ok but creats optimisation issue