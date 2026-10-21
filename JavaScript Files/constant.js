// constant = a variable that can't be changed

const PI = 3.14;
let radius;
let circumference;

// PI = 238.38; cant able to change the value

//using window prompt

// radius = window.prompt("enter radius:");
// console.log(typeof radius);
// radius = Number(radius);
// console.log(typeof radius);
// circumference = 2*pi*radius;
// console.log(circumference);

document.getElementById("mybutton").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    console.log(circumference);
    document.getElementById("myh3").textContent = `circumference: ${circumference +"cm"}`;
}

