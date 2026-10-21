let age =10;
let mes = age>=18 ? "you are a adult":"you are a minor";
console.log(mes);

let purchaseAmount =1230;
let discount = purchaseAmount>=1000 ? 10:0;
console.log(`Afetr discount: RS ${purchaseAmount-purchaseAmount*(discount/100)}`);