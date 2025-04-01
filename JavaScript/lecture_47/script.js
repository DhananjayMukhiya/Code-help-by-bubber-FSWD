// //classes

// class Human {
//     //properties
//     age = 20; //by default public
//     #wt = 60; //privat
//     ht = 160;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am Wolking", this.#wt)
//     }

//     runing(){
//         console.log("I am Runing")
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(value){
//         this.#wt = value;
//     }
// }

// let obj = new Human(50, 190, 80);
// console.log(obj.age);
// console.log(obj.ht);

// // obj.walking();

// let finalWeight = obj.fetchWeight;

// console.log(finalWeight);

// // obj.modifyWeight = 70;

// // let finalWeight = obj.fetchWeight;

// // console.log(finalWeight);

// function sayName(fName = "Dhananjay", lName = "Mukhiya") {
//     console.log("My Name is: ",fName,"",lName);
// }
// function sayName(fName = "Dhananjay", lName = fName.toUpperCase()) {
//     console.log("My Name is: ",fName,"",lName);
// }

// sayName();
// sayName("Dhananjay", "Mukhiya");
// sayName("Dhananjay");


// function solve(value = {age: 15, wt: 80, ht: 165}) {
//     console.log("Hello Ji", value);
// }
// function solve(value = ['dhananjay', 'rajan', 'suraj']) {
//     console.log("Hello Ji", value);
// }
function solve(value = "DHAnanjay") {
    console.log("Hello Ji", value);
}

solve(undefined);