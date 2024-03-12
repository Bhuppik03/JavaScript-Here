// constant are only one way declare if you declare the const, use the const keyword
const studentId = 12345 

/*if you are use a const variable during the declaration variable and after that you can not changed the values
*/
// studentId = 121221 //Not allowed 

//Their are two ways to declare a variable such as let, or var
let studentEmail = "bhupendrak0307@gmail.com" 
var studentPassword = "12345"
/*
Prefer not to use var,
because of issue in block scope and functional scope {}-this is blocked scope
*/

studentCity = "Gr.Noida"  //This method not use during the declaration values

let studentState;  //If you just declare the variable and leave it, without passing any value to it, then JavaScript automatically considers it undefined.


//changed value
studentEmail = "rohitkurmi099@gmail.com"
studentPassword = "121212"
stduentCity = "Noida"

// 1st method to print the separate values or again again print the value
console.log(studentId);
console.log(studentEmail);
console.log(studentPassword);
console.log(studentCity);

//2nd method to print the all values together
console.table([studentId, studentEmail, studentPassword, studentCity, studentState])