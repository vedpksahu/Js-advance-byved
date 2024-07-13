function sayMyName() {
  console.log("V");
  console.log("e");
  console.log("d");
  console.log("p");
  console.log("r");
  console.log("a");
  console.log("k");
  console.log("a");
  console.log("s");
  console.log("h");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  // inthat time it is parameter
  console.log(number1 + number2); //argument

  //let result = number1 + number2
  //return result
  return number1 + number2;
}

// const result = addTwoNumbers(3, 6);
// console.log("Result:", result);

function loginUserMessage(username = "ved") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("ved"));
console.log(loginUserMessage());
