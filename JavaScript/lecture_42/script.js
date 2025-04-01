//Loops in JavaScript

//1. for Loop

// for (let i = 1; i <= 5; i++) {
//     console.log("Iteration: " + i);
//   }

// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }
  
// for (let i=1; i<=6; i++) {
//     if(i==4){
//         break;
//     } else{
//         console.log(i)
//     }
// }

// for (let i=1; i<=6; i++) {
//     if(i==4){
//         continue;
//     } else{
//         console.log(i)
//     }
// }

//2. while Loop

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration: " + i);
//   i++;
// }

// let i = 5;
// while (i>0) {
//     console.log(i);
//     i--;
// }

//3. do...while Loop

// let i = 1;
// do {
//   console.log("Iteration: " + i);
//   i++;
// } while (i <= 0);

//Strings in JavaScript

// let str1 = "Hello, World!";
// let str2 = 'Single Quotes';
// let str3 = `Template 
// Literals`;

// console.log(typeof(str1));
// console.log(typeof(str2));
// console.log(typeof(str3));

// console.log(str3);

// let firstName = new String("Dhananjay Coders");
// console.log(firstName);

/*let text = " JavaScript is Awesome! ";

// Length of a string
console.log(text.length);

// Convert to uppercase
console.log(text.toUpperCase());

// Convert to lowercase
console.log(text.toLowerCase());

// Remove whitespace from both ends
console.log(text.trim());

// Extract substring
console.log(text.slice(0, 10)); // " JavaScrip"

// Replace text
console.log(text.replace("Awesome", "Powerful"));

// Check if a string includes another string
console.log(text.includes("JavaScript")); // true

// Split a string into an array
console.log(text.split(" ")); // ["", "JavaScript", "is", "Awesome!", ""]

// Join an array into a string
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

// String Interpolation (Template Literals)
*/

// let name = "Dhananjay";
// let age = 19;
// console.log(`My name is ${name} and I am ${age} years old.`);

let op1 = 'English ';
// let op2 = 'Hindi ';

// let finalAns = `${op1}${op2}`;
// console.log(finalAns);

// let ans = op1 + op2;
// console.log(ans);

console.log(op1.length);
console.log(op1.toUpperCase());
console.log(op1.toLowerCase());
console.log(op1.trim());
console.log(op1.slice(0, 5));
console.log(op1.replace("English", "Bhojpuri"));
console.log(op1.includes("English")); // true
console.log(op1.split(" "));