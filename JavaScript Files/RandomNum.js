let randomNum = Math.floor(Math.random() *10)+1;
console.log(randomNum);

const mybutton = document.getElementById("mybutton");
const myh4 = document.getElementById("myh4");
const myh5 = document.getElementById("myh5");
const myh6 = document.getElementById("myh6");
const min = 1;
const max = 6;
let ranNum1;
let ranNum2;
let ranNum3;

mybutton.onclick = function(){
    randNum1 = Math.floor(Math.random()*max)+min
    randNum2= Math.floor(Math.random()*max)+min
    randNum3= Math.floor(Math.random()*max)+min
    myh4.textContent = randNum1;
    myh5.textContent = randNum2;
    myh6.textContent = randNum3;
}