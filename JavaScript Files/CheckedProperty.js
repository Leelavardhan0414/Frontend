const mycheckbox = document.getElementById("mycheckbox");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const mybutton = document.getElementById("mybutton");
const myp1 = document.getElementById("myp1");
const myp2 = document.getElementById("myp2");

mybutton.onclick = function(){
    if(mycheckbox.checked){
        myp1.textContent = "you are subscribed";
    }
    else{
        myp1.textContent = "you are not subscribed";
    }
    if(radio1.checked){
        myp2.textContent = "you are paying with paytm";
    }
    else if(radio2.checked){
        myp2.textContent = "you are paying with phonepay";
    }
    else if(radio3.checked){
        myp2.textContent = "you are paying with GPay";
    }
    else{
        myp2.textContent = "select any one of the payment method";
    }
}