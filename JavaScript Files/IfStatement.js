

// let age = 16;
// if(age>=18){
//     document.getElementById("myp").textContent = "Eligible";
//     console.log("Eligible")
// }
// else{
//     document.getElementById("myp").textContent = "Not Eligible";
//     console.log("Not Eligible");
// }


// boolean

// let isStudent = false;

// if(isStudent){
//     document.getElementById("myp").textContent = "Student";
// }
// else{
//     document.getElementById("myp").textContent = "Not a Student";
// }


// nested if

// let age = 19;

// if(age>=65){
//     document.getElementById("myp").textContent = "old"
// }
// else if(age>=45){
//     document.getElementById("myp").textContent = "Middle aged";
// }
// else if(age>=30){
//     document.getElementById("myp").textContent = "Young";
// }
// else if(age>=18){
//     document.getElementById("myp").textContent = "Adult";
// }
// else{
//     document.getElementById("myp").textContent = "Child";
// }


const myage = document.getElementById("myage");
const mybutton = document.getElementById("mybutton");
const myp = document.getElementById("myp");

let age;
let drivelicence = true;
mybutton.onclick = function(){
    age = myage.value;
    age = Number(age);
    if (age >= 18) {
        console.log("You are Eligible to drive")
        if (drivelicence) {
            document.getElementById("myp").textContent = "Enough to drive";
        }
        else {
            document.getElementById("myp").textContent = " Not Enough to drive";
        }

    }
    else {
        document.getElementById("myp").textContent = "Not Enough to drive";
    }
}




