//#primitive

//7 types string , number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 2345833738838398838383383838n;

// Reference type or non-primitive

//objects, array, function

const heros = ["hatim", "karma", "vikral"];

let myObj = {
  name: "ved",
  age: 25,
};

const myFuncation = function () {
  console.log("Hello World");
};

// console.log(typeof myObj);

//stack and heap

//stack (primitive) (get copy)

let myHousename = "newpolicequarters";

let anothername = myHousename;
anothername = "momos aur chatni";

//  console.log(myHousename);
//  console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@bil",
};

let userTwo = userOne;
userTwo.email = "ved@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

//heap (non-primitive) (get reference)
