// TODO: Do what must be done
import Form from "./components/form";
import H2 from "./components/h2";

const paragraphs = document.querySelectorAll("p"); //checks the html for every instance of the p tag

console.log(Array.from(paragraphs).map((pTag) => pTag.innerText)); //Array.from(paragraphs) converts paragraphs into an array so we could use .map

document.body.appendChild(document.createElement("h2")).textContent =
  "Hello World!"; //appendChild adds the resulting createElement and textContent to the html on runtime

const app = document.getElementById(`app`);

app.innerHTML = H2(`Hello, World!`);
app.innerHTML += Form();

const form = document.querySelector("form");

form.addEventListener("submit", (formSubmissionEvent) => {
  formSubmissionEvent.preventDefault(); //prevents page reload when we click the submit button

  console.log(formSubmissionEvent.target.text.value); //target.text.value prints the contents of the textbox in the console when we click submit
});
