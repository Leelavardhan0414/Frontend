
// East Way = window prompt

let username;
username = window.prompt("What is your Name?");
console.log(username);

window.alert("hey alert");

// Professional Way = HTML Textbox
let Name;
document.getElementById("mybutton").onclick = function(){
    Name = document.getElementById("mytext").value;
    console.log(Name);
    document.getElementById("myh1").textContent = `Hello ${Name}`;
}