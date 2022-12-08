export function makePage() {
  const content = document.getElementById("content")

  const header = document.createElement("h1");
  header.textContent = "Basic Restaurant Page";
  content.append(header);

  const image = document.createElement("img");
  image.src = "../dist/pictures/restourant.jpg";
  content.append(image);

  const paragraf = document.createElement("p");
  paragraf.textContent = "This restaurant was open in 2015 and it's focused on italian exquisitefood and drinks. We have all sorts of original italian pastas, pizzas, wine, cheeses and of course ice creams!"
  content.append(paragraf);
}