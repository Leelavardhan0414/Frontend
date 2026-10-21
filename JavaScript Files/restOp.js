// rest Operator is represented as same as Spread oprators
// it works Opposite to Spread Operator
// it binds the elements helps in puting all together


function names(...names){
    console.log(names);
}

function namess(...names){
    return names;
}

let a = "Leela";
let b = "Madhuri";
let c = "Manoj";
let d = "Eshu";
let e = "Hari";
let f = "Kiran";

names(a,b,c,d,e,f,"Anil");
const namesss = namess(a,b,c,d,e,f);
console.log(namesss);