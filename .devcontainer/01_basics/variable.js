const accountId = 3818878;
let accountEmail = "vedpraka@gmail.com";
var accountPassword = "213455";
accountCity = " bhilai";
let accountState;

//accountId= 3 //not allowed for change

accountEmail = "exppxp@gmail.com";
accountPassword = "21324354";
accountCity = "Delhi";

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
