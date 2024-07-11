// Write your code here!
 const element = document.createElement("div");
    document.body.append(element);

    // 2. Create an unordered list (ul) and append list items (li) to it
    const ul = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      li.textContent = (i + 1).toString();
      ul.append(li);
    }
    element.append(ul);

    // 3. Use innerHTML to add complex content to the main element
    const main = document.getElementById("main");
    main.innerHTML = `
      <h1>Poodles!</h1>
      <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
      <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
    `;

    // 4. Change properties of an element
    main.style.height = "300px";
    main.style.backgroundColor = "#27647B";
    main.textContent = "You've changed what's on the screen!";
    main.style.fontSize = "24px";
    main.style.marginLeft = "30px";
    main.style.lineHeight = 2;

    // 5. Add and remove class names
    main.className = "pet-listing dog";
    main.classList.remove("dog");
    main.classList.add("cat", "sale");

    // 6. Remove a specific child element from the ul
    const secondChild = ul.querySelector("li:nth-child(2)");
    ul.removeChild(secondChild);

    // 7. Remove the entire ul element
    ul.remove();

    // 8. Add custom text to the main element
    const newElement = document.createElement("div");
    newElement.textContent = "Amos is the champion";
    document.body.append(newElement);


