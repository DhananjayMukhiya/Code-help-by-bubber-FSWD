

// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Dhananjay");
//     reject(new Error("Internal Server Error"));
// });


// let sayMyName = () => {
//    console.log("My Name is Dhananjay Kumar");
// }



// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(sayMyName, 10000);
//     resolve (1);
// });

//then and catch

// let myPromise = new Promise((resolve, reject) => {
//     //let success = true; // Change to false to test rejection
//     let success = false;
//     setTimeout(() => {
//         if (success) {
//             resolve("✅ Task Completed!");
//         } else {
//             reject("❌ Task Failed!");
//         }
//     }, 2000); // Simulates an async task
// });

// Handling the Promise
// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Done processing!")
// }); 

//shortcut

// Handling the Promise
// myPromise
//     .then(result => console.log(result))  // Runs if resolved
//     .catch(error => console.log(error))   // Runs if rejected
//     .finally(() => console.log("Done processing!"));  // Runs always

//multiple then block

// myPromise.then((result) => {
//     console.log("first meaasage: " + result)
//     return "✅ Task Completed!(1)";
// }).then((result) => {
//     console.log("second meaasage: " + result)
//     return "✅ Task Completed!(2)";
// }).then((result) => {
//     console.log("third meaasage: " + result)
//     return "✅ Task Completed!(3)";
// }).catch((error) => {
//     console.log("Error: " + error)
// }).finally(() => {
//     console.log("Mai HAsesha run karunga")
// });


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first")
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second")
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "third")
})
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "fourth")
})

Promise.all([promise1, promise2, promise3, promise4])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.error(": " + error)
})