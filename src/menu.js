export function menuPage() {
  const content = document.getElementById("content")

  content.replaceChildren();

  const header = document.createElement("h1");
  header.textContent = "Menu";
  content.append(header);

  const firstImage = document.createElement("img");
  firstImage.src = "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  content.append(firstImage);

  const firstParagraf = document.createElement("p");
  firstParagraf.textContent = "Shrimp pasta with Beef and Tomatoes";
  content.appendChild(firstParagraf);

  const secondImage = document.createElement("img");
  secondImage.src = "https://images.unsplash.com/photo-1523457345928-9e51f4d5ba94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  content.append(secondImage);

  const secondParagraf = document.createElement("p");
  secondParagraf.textContent = "Fruit and Cheese Board with Honey";
  content.append(secondParagraf);
}
