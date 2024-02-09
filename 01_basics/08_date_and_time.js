// Date method/ prototype
/* 
 there are many but these are some
  
  Date.toString()
  Date.toDateString()
  Date.toTimeString()
  Date.toLocalString()
  Date.toLocalDateString()
  Date.toLocalTimeString()
  Date.toUTCString()
  Date.getHours()
  Date.getDay()
  Date.getMonths()
  Date.getSeconds()
  Date.getMilliseconds()
  Date.now()

*/

let myDate = new Date()
console.log(myDate); // out- 2024-02-09T15:00:25.056Z
console.log(myDate.toString()); //out- Fri Feb 09 2024 15:00:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //out- Fri Feb 09 2024
console.log(myDate.toTimeString());//out- 15:00:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());//out- 2/9/2024, 3:00:25 PM
console.log(myDate.toLocaleDateString());//out- 2/9/2024
console.log(myDate.toLocaleTimeString());//out- 3:00:25 PM
console.log(myDate.toUTCString());//out- Fri, 09 Feb 2024 15:00:25 GMT

console.log(Date.now())// returns the number of milliseconds elapsed since the epoch i.e from that day till now

console.log(Date.getTime())// returns the number of milliseconds for this date since the epoch 


// to get dates in specific formats
 
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())


// to convert milliseconds into seconds
console.log(Math.floor(Date.now()/1000));