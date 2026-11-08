
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


/* PROJECTS (data from projects.js)

   1) A list of project cards:
      <div data-projects="all">            all projects, or
      <div data-projects="featured">       only projects with featured: true
        <template> ...one card... </template>
      </div>
      The card inside <template> is copied once per project.

   2) One project's info on its own page:
      <section data-project="enkombotur"> ... </section>

   Inside both, add data-field="..." to an element to fill it:
      text  -> <h1 data-field="title"></h1>
      image -> <img data-field="teaser">   (alt text comes from "teaserAlt")
      link  -> <a data-field="page">       (sets the href)
      "number" gives 01, 02, 03... based on the order in projects.js.
*/

// Path from this page to the site's main folder ("", "../" or "../../"),
// read from how this page links to script.js
const SITE_ROOT = document.currentScript.getAttribute("src").split("assets/script.js")[0];

function fillProjectFields(root, project) {
  root.querySelectorAll("[data-field]").forEach(function (el) {
    const field = el.dataset.field;
    const value = project[field];
    const empty = value === undefined || value === "" || (Array.isArray(value) && value.length === 0);

    if (el.tagName === "A") {
      if (!empty) el.href = SITE_ROOT + value;   // no href = card is not clickable
    } else if (empty) {
      el.hidden = true;
    } else if (el.tagName === "IMG") {
      el.src = SITE_ROOT + value;
      el.alt = project[field + "Alt"] || "";
    } else {
      el.textContent = Array.isArray(value) ? value.join(", ") : value;
    }
  });
}

if (typeof projects !== "undefined") {
  const numbered = projects.map(function (project, i) {
    return Object.assign({ number: String(i + 1).padStart(2, "0") }, project);
  });

  // Fill a single project's info on its own page
  document.querySelectorAll("[data-project]").forEach(function (section) {
    const project = numbered.find(function (p) { return p.id === section.dataset.project; });
    if (project) {
      fillProjectFields(section, project);
    } else {
      console.warn('No project with id "' + section.dataset.project + '" in projects.js');
    }
  });

  // Build the card lists
  document.querySelectorAll("[data-projects]").forEach(function (list) {
    const template = list.querySelector("template");
    const onlyFeatured = list.dataset.projects === "featured";

    numbered
      .filter(function (p) { return !onlyFeatured || p.featured; })
      .forEach(function (project) {
        const card = template.content.cloneNode(true);
        fillProjectFields(card, project);
        list.appendChild(card);
      });
  });
}
