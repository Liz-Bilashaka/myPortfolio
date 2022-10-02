/**
 * This code helps add the navbarDark when scroll Y (Vertical) is about 100
 */
const header = document.querySelector(".site-header");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

/**
 * Code to open the menu in mobile view
 */
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");
const desktopHeader = document.querySelector(".site-header");
const mobileMenuHeader = document.querySelector(".mobileMenu");

menu.addEventListener("click", () => {
  // nav.classList.add('mobileMenu')
  menu.classList.add("close-item");
  desktopHeader.classList.add("close-item");
  mobileMenuHeader.classList.add("mobileMenuOpen");
  close.classList.add("close-wrapper");
});

// Event to replace to default
const eventRemove = (event) => {
  event.addEventListener("click", () => {
    nav.classList.remove("mobileMenu");
    menu.classList.remove("close-item");
    desktopHeader.classList.remove("close-item");
    mobileMenuHeader.classList.remove("mobileMenuOpen");
    close.classList.remove("close-wrapper");
  });
};

// Call  
eventRemove(close);

const matches = document.querySelectorAll(".menu-wrapper > .navList  > li ");

matches.forEach((userItem) => {
  const anchor = userItem.querySelector("a");
  eventRemove(anchor);
});
