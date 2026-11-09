
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


/* CAROUSEL PHOTO POP-UPS
   When the mouse rests on a carousel photo, a small text box appears after
   a short pause. Text per photo (add to the <img>):
     data-title="Where / what"       gold heading (optional)
     data-caption="Short context"    the text (if missing, the alt text is used)
*/
const PHOTO_TIP_DELAY = 1200;   // milliseconds before the box appears

const photoTip = document.createElement("div");
photoTip.className = "photo-tip";
photoTip.setAttribute("aria-hidden", "true");
document.body.appendChild(photoTip);

let photoTipTimer = null;

function showPhotoTip(img) {
  const title = img.dataset.title || "";
  const text = img.dataset.caption || img.alt || "";
  if (!title && !text) return;

  photoTip.innerHTML = "";
  if (title) {
    const heading = document.createElement("p");
    heading.className = "photo-tip__title";
    heading.textContent = title;
    photoTip.appendChild(heading);
  }
  if (text) {
    const body = document.createElement("p");
    body.textContent = text;
    photoTip.appendChild(body);
  }

  // Place the box inside the photo, at its bottom-left corner
  const box = img.getBoundingClientRect();
  photoTip.style.maxWidth = Math.max(220, Math.min(320, box.width - 24)) + "px";
  const tipHeight = photoTip.offsetHeight;
  const tipWidth = photoTip.offsetWidth;
  const left = Math.min(Math.max(box.left + 12, 8), window.innerWidth - tipWidth - 8);
  const top = Math.max(box.bottom - tipHeight - 12, 8);
  photoTip.style.left = left + "px";
  photoTip.style.top = top + "px";
  photoTip.classList.add("is-visible");
}

function hidePhotoTip() {
  clearTimeout(photoTipTimer);
  photoTip.classList.remove("is-visible");
}

document.querySelectorAll(".carousel .teaser-gallery-img").forEach(function (img) {
  img.addEventListener("pointerenter", function (e) {
    if (e.pointerType !== "mouse") return;   // touch screens have no hover
    clearTimeout(photoTipTimer);
    photoTipTimer = setTimeout(function () { showPhotoTip(img); }, PHOTO_TIP_DELAY);
  });
  img.addEventListener("pointerleave", hidePhotoTip);
});

window.addEventListener("scroll", hidePhotoTip, { passive: true });


/* PROJECTS (data from projects.js)

   1) A list of project cards:
      <div data-projects="all">            all projects, or
      <div data-projects="featured">       only projects with featured: true
        <template> ...one card... </template>
      </div>
      The card inside <template> is copied once per project.

      Optional extras on the same <div>:
        data-sort="newest"   newest year first (same year: order in projects.js)
        data-sort="oldest"   oldest year first
        data-limit="4"       show at most this many cards

   2) One project's info on its own page:
      <section data-project="enkombotur"> ... </section>

   Inside both, add data-field="..." to an element to fill it:
      text  -> <h1 data-field="title"></h1>
      image -> <img data-field="teaser">   (alt text comes from "teaserAlt")
      link  -> <a data-field="page">       (sets the href)
      "number" gives 01, 02, 03... = the card's position in that list.
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

// The year used for sorting. For a span like "2022 - 2024" the last year counts.
function projectYear(project) {
  const years = String(project.year || "").match(/\d{4}/g);
  return years ? Math.max.apply(null, years.map(Number)) : 0;
}

if (typeof projects !== "undefined") {

  // Fill a single project's info on its own page
  document.querySelectorAll("[data-project]").forEach(function (section) {
    const project = projects.find(function (p) { return p.id === section.dataset.project; });
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
    const sort = list.dataset.sort;
    const limit = Number(list.dataset.limit) || projects.length;

    let shown = projects.filter(function (p) { return !onlyFeatured || p.featured; });

    if (sort === "newest") shown.sort(function (a, b) { return projectYear(b) - projectYear(a); });
    if (sort === "oldest") shown.sort(function (a, b) { return projectYear(a) - projectYear(b); });

    shown.slice(0, limit).forEach(function (project, i) {
      const card = template.content.cloneNode(true);
      fillProjectFields(card, Object.assign({ number: String(i + 1).padStart(2, "0") }, project));
      list.appendChild(card);
    });
  });
}
