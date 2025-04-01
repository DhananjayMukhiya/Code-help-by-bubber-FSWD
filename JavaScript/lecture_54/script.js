

// //Code 1

// const t1 = performance.now();

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Paragraph " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("Total time by code 1: " + (t2-t1));

// //Code 2

// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i = 1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Paragraph " + i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("Total time by code 2: " + (t4-t3));


//best code

let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Paragraph " + (i+100);
    //no reflow and no repaint for the below line
    fragment.appendChild(para);
}

//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);