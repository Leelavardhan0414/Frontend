let a = window.prompt("Enter UserName: ");

// a = a.trim();
// let firCh = a.charAt(0);
// firCh = firCh.toUpperCase();
    
// let rCh = a.slice(1);
// rCh = rCh.toLowerCase();
// let UserName = firCh+rCh;
// console.log(UserName);


a = a.trim().charAt(0).toUpperCase()+a.trim().slice(1).toLowerCase();

console.log(a);