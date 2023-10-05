const accountID = 123456
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed because constant value in not changed

accountEmail = "chitale@gmail.com"
accountPassword = "147852"
accountCity = "Mumbai"

console.log(accountID); // 1st method

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/