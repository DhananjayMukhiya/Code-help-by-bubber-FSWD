
console.log("Step 1");

setTimeout(() => {
    console.log("Step 2 (Async)");
}, 5000); // Delayed for 5 seconds

console.log("Step 3");

setTimeout(() => {
    console.log("Step 4 (Async)");
}, 2000); // Delayed for 2 seconds
