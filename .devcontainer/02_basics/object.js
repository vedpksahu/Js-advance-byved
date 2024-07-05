//singleton
//object.create

//object literals

/*const mySym = Symbol("key1");

const JsUser = {
  name: "ved",
  [mySym]: "myKey1",
  age: 24,
  location: "durg",
  email: "vedpk@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "vedexplore@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "sahuexplore@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());*/

////////////additional object/////////////////

// const tinderUser = new Object(); //singleton
const tinderUser = {}; //nonsingleton

tinderUser.id = "123acs";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

//

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "bed",
      lastname: "room",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj5 = { 5: "a", 5: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj5);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2, ...obj5 };
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "ved@gmail.com",
  },
  {
    id: 2,
    email: "ved@gmail.com",
  },
];

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
