// spraed operator is represented as "...", it is used to unpack the elements

let fruits = ["Mango", "Banana", "Orange", "Guava"];
let newFruits = [...fruits];
console.log(newFruits);

let name = "Leelavardhan";
let ch = [...name];
console.log(ch)

for (let i =0;i<ch.length;i++){
    console.log(ch[i]);
}

let nums = [1,2,3,5,7];
let maxx = Math.max(nums); 
let max = Math.max(...nums);
console.group(maxx);
console.log(max);

let a = "Leelavardhan";
let b = a.charAt(0);
console.log(b);
console.log("")

for (let i =0;i<a.length;i++){
    let c = a.charAt(i)
    console.log(c);
}

let d = a.slice(2,4)
console.log(d);


// Variables 

var s = 8;
var s = 9;
console.log(s)

let h = 2;
h=3;
console.log(h);

const k = 3;
k = 4;
console.log(h);