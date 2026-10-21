const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");
const myh1 = document.getElementById("myh1");

let count = 0;

inc.onclick = function(){
    count++;
    myh1.textContent = count;
}
dec.onclick = function(){
    count--;
    myh1.textContent = count;
}
reset.onclick = function(){
    count = 0;
    myh1.textContent = count;
}
