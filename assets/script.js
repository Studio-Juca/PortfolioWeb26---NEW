
/* PORTFOLIO DOWNLOAD */

/* Passwords for different people:
TEST: Vuk&Vukica
Jobbsøknadd: Jobb2026
*/
function requestDownload() {
  const input = prompt("Enter password to download portfolio:");
  if (input === "Jobb2026") {
    window.location.href = "assets/Portfolio_JulijaCvijanovic-NOR.pdf";
  } else {
    alert("Incorrect password. Please contact me to request access.");
  }
}

/* NAVIGATION */

function toggleMenu(button) {
  const menu = document.getElementById("nav-menu");
  const open = menu.classList.toggle("is-open");
  button.setAttribute("aria-expanded", open);
}

function toggleDropdown(button) {
  const open = button.parentElement.classList.toggle("is-open");
  button.setAttribute("aria-expanded", open);
}

// Close dropdown when clicking elsewhere
document.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown.is-open").forEach(function (dropdown) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".dropdown__toggle").setAttribute("aria-expanded", false);
    }
  });
});

// Close mobile menu after choosing a link
document.querySelectorAll("#nav-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("nav-menu").classList.remove("is-open");
    document.querySelector(".nav__toggle").setAttribute("aria-expanded", false);
  });
});

/* CAROUSEL */

// Duplicate the panels so the scrolling loop has no visible jump
document.querySelectorAll(".carousel__track").forEach(function (track) {
  Array.from(track.children).forEach(function (panel) {
    const clone = panel.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
});