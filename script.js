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
console.log(`i: ${i} relevantDOMElements[i]: ${relevantDOMElements[i].innerText}`);
})

// add event listener to each div

// 3. element with id "donut" is clicked, log the number of words in the element


// 4. when aside clicked, window.prompt then add id with content from prompt to aside's parent, log target
// 5. add an input with classname as the first child of preceding id's first aside
// 6. log cowsay for the input