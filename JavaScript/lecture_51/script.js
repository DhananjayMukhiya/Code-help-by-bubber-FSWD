//DOM Manipulation

// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[1].innerText = "abcd");

// console.log(document.body.style.background = "green");

// let heading = document.getElementById("fHeading");

// console.dir(heading);

// let heading = document.getElementsByClassName("text");

// console.dir(heading);

// let heading = document.getElementsByTagName("h1");

// console.dir(heading);

// let heading = document.querySelector(".text");

// console.dir(heading);


// let heading = document.querySelectorAll(".text");

// console.dir(heading);


// let heading = document.querySelector(".text");

// // console.dir(heading.innerText = "Dhananjay Kumar");
// console.dir(heading.innerHTML = "<button>Log-in</button>");

// let fruts = document.querySelector("div");

// lets practice

// let heading = document.querySelector("h2");

// console.log(heading.innerText);

// heading.innerText = heading.innerText + ", from Apna College";


// console.log(heading.innerText);


// 2.question

// let divs = document.querySelectorAll(".box");

// let idx = 0;
// for(let div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


// part2

// let div = document.querySelector("#box");
// console.log(div)

// let id = div.getAttribute("id");
// console.log(id)
// let name = div.getAttribute("name");
// console.log(name)
// div.setAttribute("name", "Devnath");
// let upNmae = div.getAttribute("name");
// console.log(upNmae)

// let div = document.querySelector("#box");
// console.log(div.style);

// console.log(div.style.backgroundColor = "green");
// console.log(div.style.backgroundColor = "purple");
// console.log(div.style.fontSize = "20px");
// console.log(div.innerText = "Dhananjay kumar");

//create new element through javascript

// let newBtn = document.createElement("button")
// newBtn.innerText = "Sign-up"

// let div = document.querySelector("#box");

// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);

// let newButton = document.querySelector("button");
// newButton.remove();

// practice1

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newBtn);