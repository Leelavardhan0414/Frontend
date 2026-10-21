let nums = [1, 2, 3, 4, 5]
let names = ["leelavardhan", "madhuri", "manoj"]

const squ = nums.map(squNum);
const cube = nums.map(cubeNum);
console.log(squ);
console.log(cube);

function squNum(element) {
    return Math.pow(element, 2);
}

function cubeNum(element) {
    return Math.pow(element, 3);
}

const Upp = names.map(upperCase);
console.log(Upp);

function upperCase(elements) {
    return elements.charAt(0).toUpperCase() + elements.slice(1);
}


const dates = ["2003-04-04", "2003-14-6","2000-14-04"]
const formatedDates = dates.map(formateDate);
console.log(formatedDates);

function formateDate(element){
    const Epart = element.split("-");
    return `${Epart[1]}-${Epart[2]}-${Epart[0]}`
}


