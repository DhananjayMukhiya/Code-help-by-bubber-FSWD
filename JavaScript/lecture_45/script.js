//function hosting and calls in js

//Function Hoisting

// greet(); // Output: Hello!

// function greet() {
//   console.log("Hello!");
// }

// //Variable Hoisting

// console.log(a); // Output: undefined
// var a = 10;
// console.log(a); // Output: 10


// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// const c = 30; // 'c' को डिक्लेरेशन से पहले एक्सेस करने पर भी ReferenceError आएगा।

//function call stack

// class Person {
//     constructor(name, age) {
//       this.name = name; // Property
//       this.age = age;   // Property
//     }
  
//     Method
//     introduce() {
//       return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//     }
//   }

//   const person1 = new Person('Dhananjay', 25);
// console.log(person1.introduce()); // Output: Hi, I'm Dhananjay, and I'm 25 years old.

// function greetMe (greet, fullName) {
//   console.log("Hello ", fullName);
//   greet();
// };

// function greet() {
//   console.log("Greeting for the Day");
// }

// greetMe(greet, "Dhananjay");

// function solve(number) {
//   return function (number) {
//     return number*number;
//   }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

// const arr = [
//   function(a,b) {
//     return a+b;
//   },
//   function(a,b) {
//     return a-b;
//   },
//   function(a,b) {
//     return a*b;
//   },
//   function(a,b) {
//     return a/b;
//   }
// ]

// let first = arr[0];
// let ans = first(10,5);

// console.log(ans);

// let obj = {
//   age: 20,
//   ht: 160,
//   wt: 50,

//   greet: () => {
//     console.log("Dhananjay")
//   }
// }

// console.log(obj.age);
// obj.greet();

