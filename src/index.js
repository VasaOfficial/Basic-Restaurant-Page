import { homePage } from "./home-page.js";
import { menuPage} from "./menu.js";
import { contactPage } from "./contact.js";
import "./style.css";

homePage();

let tabSwitching =  (function() {
  const home = document.querySelector(".home");
  home.addEventListener("click", homePage);

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", menuPage);

  const contact = document.querySelector(".contact")
  contact.addEventListener("click", contactPage);
})();
