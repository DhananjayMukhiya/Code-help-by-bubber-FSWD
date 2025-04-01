
// ChatGPT said:
// 🔹 Closure in JavaScript (Simple Explanation)
// Closure ek function hota hai jo apne parent function ke variables ko yaad rakhta hai, even after the parent function has finished execution.

// Example 1: Basic Closure

// function outerFunction() {
//     let message = "Hello, Closure!";  // Parent function ka variable

//     function innerFunction() {
//         console.log(message); // Inner function parent ke variable ko access kar raha hai
//     }

//     return innerFunction; // Function return kar raha hai
// }

// const closureFunc = outerFunction(); // outerFunction call kiya
// closureFunc(); // "Hello, Closure!"


// Example 2: Counter Using Closure

// function createCounter() {
//     let count = 0;  // Private variable

//     return function() {
//         count++;
//         console.log("Count:", count);
//     };
// }

// const counter = createCounter();
// counter(); // Count: 1
// counter(); // Count: 2
// counter(); // Count: 3
// counter(); // Count: 4

// Real-World Use Case (Event Listeners)

// function attachEventListener() {
//     let clickCount = 0; // Closure variable

//     document.getElementById("myButton").addEventListener("click", function() {
//         clickCount++;
//         console.log("Button Clicked", clickCount, "times");
//     });
// }

// attachEventListener();
