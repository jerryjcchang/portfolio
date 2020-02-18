// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const closeBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const dimmer = document.querySelector(".dimmer");
const projectsContainer = document.querySelector(".projects");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", handleCloseModal);
initProjectCards();

function initProjectCards() {
  projectsContainer
    .querySelectorAll("img")
    .forEach(imgDiv => imgDiv.addEventListener("click", handleOpenModal));
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

function handleCloseModal() {
  modal.style.display = "none";
  dimmer.style.display = "none";
}

function handleOpenModal(e) {
  e.preventDefault();
  modal.style.display = "block";
  dimmer.style.display = "block";
}
