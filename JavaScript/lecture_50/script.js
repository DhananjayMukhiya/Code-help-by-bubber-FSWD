// //error handling in javaScript

// //1. compile time error
// // console.log(100;

// //runtime error
// // console.log(x);

// try {
//     // Code that might throw an error
//     console.log("try block start here");
//     //error -> ReferenceError: x is not defined
//     console.log(x);
//     console.log(y);
//     console.log("try block end here");
//   } catch (error) {
//     // Code to handle the error
//     console.log("i am inside catch block");
//     console.log("Your error is here: ", error);
//   }
// finally{
//     console.log("i will run everytime, as i am finally bock");
// }

//lets create a custom error

// try{
//     console.log(x)
// } catch(error) {
//     throw new Error("bro before print you do decleare")
// }

// let errorCode = 100;
// if(errorCode == 100) {
//     throw new Error("Invalid Json")
// }