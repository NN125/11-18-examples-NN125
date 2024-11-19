// TODO: Do what must be done
const paragraphs = document.querySelectorAll("p"); //checks the html for every instance of the p tag

console.log(Array.from(paragraphs).map((pTag) => pTag.innerText)); //Array.from(paragraphs) converts paragraphs into an array so we could use .map

const heading = document.createElement("h1");
const headingText = document.createTextNode("Big Head!");
heading.appendChild(headingText);
document.body.appendChild(heading);
