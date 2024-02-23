// Switch case
// it is more efficient than using many else...if statements

//syntax
switch (key) { //key is the value that you want to check multiple times/ everytime
    case value:// values are the different conditions/ options from which we find the match of the key value
        
        break;

    default:
        break;
}


//eg-

const month = 13;
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    default:
        console.log("invalid month")
        break;
}

// even you can match string
// i.e month = "jan"..by giving case "Jan" :

