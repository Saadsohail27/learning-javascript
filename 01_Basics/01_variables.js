const accountId = 144553
let accountEmail = "saadsohail9997@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

// accountId = 2 // not allowed

 accountEmail = "hc@hc.com"
 accountPassword = "21212121"
 accountCity = "Karachi"

console.log(accountId);


/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])