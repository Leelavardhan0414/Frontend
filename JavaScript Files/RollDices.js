function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const DiceRes = document.getElementById("DiceRes");
    const res = [];
    for (let i = 0;i<numOfDice;i++){
        const randomNum = Math.floor(Math.random() * 6) + 1;
        res.push(randomNum);
    }
    DiceRes.textContent = `You Got: ${res.join(',')}`
}   