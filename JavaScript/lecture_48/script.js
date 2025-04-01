// let obj = {
//     age:12,
//     wt:60,
//     ht:160
// };

// console.log(obj);

// obj.color = "white";

// console.log(obj);

// Object cloning in JavaScript
//1. Shallow Cloning

// let src = {
//     age:12,
//     wt:60,
//     ht:160
// };

// // Using Spread Operator ():

// let dest = {...src};

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

//2.assign method

// let src = {
//     age:12,
//     wt:60,
//     ht:160
// };

// let src2 = {
//     value: 100,
//     fName: "Dhananjay Kumar"
// };

// let dest = Object.assign({}, src, src2);

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// 3.itration method

let src = {
    age:12,
    wt:60,
    ht:160
};

let dest = {};

//cloaning use iteartion
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //inseart newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);