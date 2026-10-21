// while loop = "repeats cod untile the conditaion becomes false"

let logIn = false;
let UserName;
let password;

while(!logIn){
    UserName = window.prompt(`Enter Username`);
    password = window.prompt(`Enter Password`);
    if(UserName === 'Leelavardhan' && password === 'Leelavardhan'){
        logIn = true;
        console.log("your logined");
    }
    else{
        console.log("Enter proper login details");
    }
}