//Array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["Hatim", "Shaktimaan"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myyArr[0]);

// array methods
// myArr.push(6); //push add number in the sequence
// myArr.push(7);
// myArr.pop(7);// pop remove last no from the array
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log( typeof newArr);

///////////////////slice or splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C", myArr);
// console.log(myn2);

//array more

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batmen"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const allheros =marvel_heros.concat(dc_heros);
//  console.log(allheros);

const allheros = [...marvel_heros, ...dc_heros];
// console.log(allheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("ved"));
// console.log(Array.from("ved"));
// console.log(Array.from({ name: "ved" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
