// Write your code here!
const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

element.textContent = "This is a new div with a list";

element.style.backgroundColor = "#f0f0f0";
element.style.padding = "10px";
element.style.border = "1px solid #ccc";

// Use innerHTML to add content to the main element
const main = document.getElementById("main");
main.innerHTML = `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
`;

// Remove the second list item from the ul
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the entire ul from the new div
ul.remove();


