// let obj = {
//     fullName: "Dhananjay",
//     age: 19,
//     cgpa: 8.3,
//     greet: function(){
//         console.log("hello ji kaise ho sare");
//     }
// };


// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2 = obj;

//Arrays in JavaScript
// An array is a special data structure in JavaScript used to store multiple values in a single variable.

// 1. Creating an Array

//Arrays in JavaScript can be created using square brackets [] or the Array constructor.

// Using square brackets (preferred)
// let fruits = ["Apple", "Banana", "Mango"];

// Using Array constructor
// let numbers = new Array(10, 20, 30);

//2. Accessing Array Elements

//Each element in an array has an index, starting from 0.

/*console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango*/

//3. Modifying an Array
//You can change an element by assigning a new value.

// fruits[1] = "Orange";
// console.log(fruits); // ["Apple", "Orange", "Mango"]
// console.log(typeof fruits);

// 4. Array Properties & Methods

//Array Length
// Returns the number of elements in the array.

// console.log(fruits.length); // 3

// Adding & Removing Elements
// ✅ Push (Add at end) & Pop (Remove from end)

/*fruits.push("Grapes"); // Adds "Grapes"
console.log(fruits); // ["Apple", "Orange", "Mango", "Grapes"]

fruits.pop(); // Removes "Grapes"
console.log(fruits); // ["Apple", "Orange", "Mango"]

//✅ Unshift (Add at start) & Shift (Remove from start)

fruits.unshift("Pineapple"); // Adds at start
console.log(fruits); // ["Pineapple", "Apple", "Orange", "Mango"]

fruits.shift(); // Removes first element
console.log(fruits); // ["Apple", "Orange", "Mango"]*/

//Looping Through an Array
// ✅ Using for loop

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//   }
  
//✅ Using forEach()

// fruits.forEach((fruit, index) => {
//     console.log(`${index}: ${fruit}`);
//   });
  
//   ✅ Using for...of

// for (let fruit of fruits) {
//   console.log(fruit);
// }

//My Practices

// let arr = [1,2,3,4,5,6];
// let numbers = new Array(10, 20, 30);
// console.log(arr);
// console.log(numbers);

// console.log(typeof (arr));
// console.log(typeof (numbers));

// console.log(arr[2]);
// console.log(arr[0]);

// let friendsName = ["Sachin", "Nitish", "Bihari", "Brijesh", "Kunal"];

// friendsName.push("Muskan");
// console.log(friendsName);
// friendsName.pop();
// console.log(friendsName);

// friendsName.unshift("Rajan");
// console.log(friendsName);
// friendsName.shift();
// console.log(friendsName);

// let numbers = [1, 2, 3, 4, 5];
// let slicedNumbers = numbers.slice(1, 4);
// console.log(slicedNumbers); // [2, 3, 4]

// let friendsName = ["Sachin", "Nitish", "Bihari", "Brijesh", "Kunal"];

// friendsName.splice(1, 2, "Ravi");
// console.log(friendsName);

// let friendsName = ["Sachin", "Nitish", "Bihari", "Brijesh", "Kunal"];


// let numbers = [10, 20, 30, 40, 50];

// map method 
// numbers.map((number, index) => {
//     console.log(number);
//     console.log(index);
// });

// let finalNumbers = numbers.map((number) => {
// return number*number;
// });

// console.log(finalNumbers);

//filter method

// let numbers = [10, 20, 30, 40, 50, 15, 17, 23];

// let finalNumbers = numbers.filter((number) => {
//     return number%2 === 0;
    
//     // if(number % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// });

// console.log(finalNumbers);

// let arr = [1, 2, "Dhananjay", "kunal", null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === "string") {
//         return true;
//     } else {
//         return false;
//     };
// });

// console.log(ans);

//reduce method

// let numbers = [10, 20, 30, 40];

// let ans = numbers.reduce((acc, curr) => {
// return acc + curr;
// }, 0);

// console.log(ans);

//sort method 

//in acending order

// let arr = [4,1,7,4,9,8,0,6,5,6,3,4,9];

// arr.sort();

// console.log(arr);

// // discanding order

// const array = [10, 5, 8, 1, 7];

// // Sorting in descending order
// array.sort((a, b) => b - a);

// console.log(array); // Output: [10, 8, 7, 5, 1]

//indexof method


// let arr = [4,1,7,4,9,8,0,6,5,6,3,4,9];

// console.log(arr.indexOf(9));

//find method

// const numbers = [3, 7, 12, 19, 25];

// // Find the first number greater than 10
// const result = numbers.find(num => num > 10);

// console.log(result); // Output: 12

//for each loop

// let numbers = [3, 7, 12, 19, 25];
// numbers.forEach((value, index) => {
//     console.log("number: ", value, "index: ", index);
// })

//for in loop

// let obj = {
//     fullName: "Dhananjay",
//     age: 19,
//     cgpa: 8.3,
//     greet: function(){
//         console.log("hello ji kaise ho sare");
//     }
// };

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }


//for of loop

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "DhananjayKumar";

// for(let value of fullName) {
//     console.log(value);
// };

let arr = [10,20,30,40,50];

let getsum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;

    // let len = arr.length;
    // let sum = 0;
    // for(let index=0; index<len; index++) {
    //     sum = sum + arr[index];
    // }
    // return sum;
}

let totalSum = getsum(arr);

console.log(totalSum);