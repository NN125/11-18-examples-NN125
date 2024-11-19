// TODO: Do what must be done
const paragraphs = document.querySelectorAll("p"); //checks the html for every instance of the p tag

console.log(Array.from(paragraphs).map((pTag) => pTag.innerText)); //Array.from(paragraphs) converts paragraphs into an array so we could use .map

document.body.appendChild(document.createElement("h2")).textContent =
  "Hello World!"; //appendChild adds the resulting createElement and textContent to the html on runtime
