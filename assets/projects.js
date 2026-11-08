
/* PROJECT DATA
   Every project is written here once. script.js uses it to fill in
   the project cards (index.html, projectoverview.html) and the top
   of each project page.

   - The order in this list is the order on the site (and decides
     the 01, 02, 03... numbers on the Projects page).
   - Write all paths from the site's main folder, e.g.
     "assets/Project-Details/..." or "Projects/....html".
     The script adds "../" by itself on pages inside Projects/.
   - Leave a field out (or write "") if a project doesn't have it;
     that spot is then hidden on the page.
   - Images have a matching "...Alt" field with the image description.
*/

const projects = [
  {
    id: "enkombotur",                 // used in data-project="..." on the project page
    title: "En Kombo Tur",
    eyebrow: "'A Combo Trip'",
    context: "3rd year - Semester project",
    tagline: "From abstract numbers to engaging metrics - How to engage travelers using CO2e data?",
    summary: "A travel planning service that guides car commuters to public transport hubs and reserved parking.",

    client: "Entur",
    role: "Lead service designer",
    year: "2024",
    tools: ["Figma", "Google Forms"],

    teaser: "assets/Project-Details/EnKomboTur/Entur_TeaserPhoto.png",
    teaserAlt: "Teaser image for the project. Our user persona, Bill, is in the center of a circle, with the project's name above it.",

    page: "Projects/EnKomboTur_Project-teaser.html",
    featured: true                    // true = also shown on the front page
  },

  // Copy the block above (from { to },) to add the next project.

  {
    id: "shelfie",                 // used in data-project="..." on the project page
    title: "Shelfie",
    eyebrow: "",
    context: "School project",
    tagline: "Expanding my Figma skills, thorough introduction to Design Systems, and working on document hygiene for efficiency.",
    summary: "An app for book clubs that makes an easier way to get a copy of the book of the month through an agreement with the libraries and bookshops.",

    client: "none",
    role: "Individual assignment",
    year: "2024",
    tools: ["Figma"],

    teaser: "assets/Project-Details/Shelfie/Shelfie_TeaserPhoto_Square.png",
    teaserAlt: "Teaser image for the project.",

    page: "Projects/Shelfie_Project-teaser.html",
    featured: true                    // true = also shown on the front page
  },

];
