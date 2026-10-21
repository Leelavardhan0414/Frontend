let names = ["Leela", "Madhuri", "Manoj", "Eshu", "Hari"];

names.sort().reverse()
console.log(names);

names.push("Kiran");
names.pop();
let s =names.slice(1,3)
console.log(s);
console.log(names);

for (let i =0;i<names.length;i++){
    console.log(names[i]);
}