export function contactPage() {
  const content = document.getElementById("content");

  content.replaceChildren();

  const header = document.createElement("h1");
  header.textContent = "Contact Page";
  content.append(header);

  const gitProfile = document.createElement("a");
  gitProfile.href = "https://github.com/VasaOfficial";
  gitProfile.textContent = "My Github";
  content.append(gitProfile);
  
  const firstParagraf = document.createElement("p");
  firstParagraf.textContent = "Photos by -";
  content.append(firstParagraf);

  const homePhoto = document.createElement("a");
  homePhoto.href = "https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  homePhoto.textContent = "Jay Wennington";
  content.append(homePhoto);

  const pastaPhoto = document.createElement("a");
  pastaPhoto.href = "https://unsplash.com/@islandsandsunsets";
  pastaPhoto.textContent = "Olayinka Babalola";
  content.append(pastaPhoto);

  const cheesePhoto = document.createElement("a");
  cheesePhoto.href = "https://unsplash.com/@marcbabin";
  cheesePhoto.textContent = "Marc Babin";
  content.append(cheesePhoto);

  const siteParagraf = document.createElement("p");
  siteParagraf.textContent = "Pictures taken from -";
  content.append(siteParagraf);

  const unsplash = document.createElement("a");
  unsplash.href = "https://unsplash.com/";
  unsplash.textContent = "Unsplash";
  content.append(unsplash);
}
