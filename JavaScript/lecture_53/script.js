// //Event in JS


// function changeText(event) {
//     console.log(event);
//     let fPara = document.getElementById("fPara");
//     fPara.textContent = "DhananjayCoders";
// };

// let fPara = document.getElementById("fPara");

// fPara.addEventListener('click', changeText); //add event listener
// // fPara.addEventListener('click', changeText, true); //add event listener

// // fPara.removeEventListener('click', changeText); //remove event listener


// let ancherEliment = document.getElementById("fAncher");

// function changeBeheaver(event) {
//    event.preventDefault();
//    ancherEliment.textContent = "Click Done Bhai";
// };


// ancherEliment.addEventListener('click', changeBeheaver);

// let paras = document.querySelectorAll("p");

// function aleatPara(event){
//     alert("You have clicked on Para: " + event.target.textContent);
// }


// for(let i = 0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', aleatPara);
// }

let myDiv = document.getElementById("myDiv");

function aleatPara(event){
   if(event.target.nodeName === 'SPAN'){
    alert("You have clicked on Para: " + event.target.textContent);
   }
}


myDiv.addEventListener('click', aleatPara);

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM पूरी तरह से लोड हो चुका है!");
});


window.onload = function() {
    console.log("पूरा पेज लोड हो गया!");
};
