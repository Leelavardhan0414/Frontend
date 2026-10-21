// for loop = "for loop executes the block of code for limited amount of times based on condtion"

for (let i=0;i<=2;i++){

    console.log(`Leelavardhan`,i);
}
console.log("continue")

for (let i =1;i<=10;i++){
    if (i==8){
        continue;
    }
    else{
        console.log(i);
    }
}
console.log("break");

for(let i=1;i<=10;i++){
    if(i==8){
        break;
    }
    else{
        console.log(i);
    }
}