// 1. append text to li that has which li it is on the page (i.e. 0..n-1)
// start by getting references to the relevant DOM elements
// make the specified modifications

let relevantDOMElements = document.getElementsByTagName("li");
// console.log(relevantDOMElements);
// relevantDOMElements.forEach(elem => console.log(elem))
for (let i = 0; i < relevantDOMElements.length; i++) {
  console.log(i, relevantDOMElements[i]);
  // if (i < (relevantDOMElements.length + 4) / 2) {
  //   relevantDOMElements[i].innerText += ` ${i}`;
  // } else {
  //   relevantDOMElements[i].innerHTML += ` ${i}`;
  // }
  const textForI = document.createTextNode(` ${i}`);
  relevantDOMElements[i].appendChild(textForI);

  document.create
}

// 2. when click div console.log(which div it is on the page, i.e. 0..n-1)
// get a ref to each div in DOM
relevantDOMElements = document.getElementsByTagName("div");
Array.from(relevantDOMElements).forEach((divElem, i) => {
//console.log(`i: ${i} relevantDOMElements[i]: ${relevantDOMElements[i].innerText}`);
divElem.addEventListener("click", (e) =>
  console.log(divElem.className + " was clicked!"));
})

// add event listener to each div


// 3. element with id "donut" is clicked, log the number of words in the element
relevantDOMElements = document.getElementById("donut");
Array.from(relevantDOMElements).forEach((divElem, i) => {
//console.log(`i: ${i} relevantDOMElements[i]: ${relevantDOMElements[i].innerText}`);
divElem.addEventListener("click", (e) =>
  console.log(divElem.className + " was clicked!")); 
})

// 4. when aside clicked, window.prompt then add id with content from prompt to aside's parent, log target
const aside = document.querySelector("body aside");
aside.addEventListener("click", (e) => {
  const userEnteredId = window.prompt("Enter an id:");
  console.log(`userEnteredId: ${userEnteredId}`);
  const parent = aside.parentElement;
  parent.id = userEnteredId;
  console.log(`e.target = ${e.target}`);

  // 5. add an input with classname as the first child of preceding id's first aside
const pattern5Result = document.querySelector(`#${userEnteredId} aside`);
const newInputElem = document.createElement("input");
newInputElem.type = "text";
newInputElem.className = "best-class-og-12324"
pattern5Result.prepend(newInputElem);

// 6. log cowsay for the input
const inputElementByClassname = document.querySelector(".best-class-og-12324");
inputElementByClassname.addEventListener("click", () => {
  const cowsay = fetch("https://helloacm.com/api/cowsay/?msg=CowSay")
  .then(console.log(cowsay));
  });
})



