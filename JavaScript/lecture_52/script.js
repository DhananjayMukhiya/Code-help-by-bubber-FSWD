let firstElement = document.querySelector(".fdiv");


console.log(firstElement.style.cssText = "background-color: red; width: 100px; height: 100px; color: white"
);

console.log(firstElement.getAttribute("class"));

firstElement.setAttribute("class", "firstDiv");

console.log(firstElement.getAttribute("class"));

firstElement.classList.add('secendclass');
firstElement.classList.remove('secendclass');
