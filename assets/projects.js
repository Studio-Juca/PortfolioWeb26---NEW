
/* PROJECT DATA
   Every project is written here once. script.js uses it to fill in
   the project cards (index.html, projectoverview.html) and the top
   of each project page.

   - The front page shows the first 4 projects here with featured: true,
     in this order. The Projects page sorts all projects by year,
     newest first (same year: the order in this list).
   - Write all paths from the site's main folder, e.g.
     "assets/Project-Details/..." or "Projects/....html".
     The script adds "../" by itself on pages inside Projects/.
   - Leave a field out (or write "") if a project doesn't have it;
     that spot is then hidden on the page.
   - Images have a matching "...Alt" field with the image description.
*/

const projects = [
  {
    id: "enkombotur",                  // used in data-project="..." on the project page
    title: "En Kombo Tur",
    eyebrow: "A Combo Trip",
    context: "3rd year - Semester project",
    tagline: "From abstract numbers to engaging metrics - How to engage travelers using CO2e data?",
    
    note: "",                             // shown in italics before the summary; "" = no note
    summary: "A travel planning service that guides car commuters to public transport hubs and reserved parking.",

    client: "Entur",                    // leave "" to hide the row
    exhibition: "",
    role: "Lead service designer",
    year: "2024",
    tools: ["Figma", "Google Forms"],

    teaser: "assets/Project-Details/EnKomboTur/Entur_TeaserPhoto.png",
    teaserAlt: "Teaser image for the project. Our user persona, Bill, is in the center of a circle, with the project's name above it.",

    page: "Projects/EnKomboTur_Project-teaser.html",
    featured: true                      // true = also shown on the front page
  },

   // Copy the block above (from { to },) to add the next project.

   {
    id: "shelfie",                     // used in data-project="..." on the project page
    title: "Shelfie",
    eyebrow: "Designsystem",
    context: "2nd year - School project",
    tagline: "Expanding my Figma skills, thorough introduction to Design Systems, and working on document hygiene for efficiency.",
    
    note: "Will be published soon!",      
    summary: "'Shelfie' is an app for book clubs that makes an easier way to get a copy of the book of the month through an agreement with the libraries and bookshops.",

    client: "",
    exhibition: "",
    role: "Individual assignment",
    year: "2024",
    tools: ["Figma"],

    teaser: "assets/Project-Details/Shelfie/Shelfie_TeaserPhoto_Square.png",
    teaserAlt: "Teaser image for the project.",

    // page: "Projects/Shelfie_Project-teaser.html",
    featured: true                  
  },

  {
    id: "navi",                 // used in data-project="..." on the project page
    title: "Navi",
    eyebrow: "Mobile guide for exchange students",
    context: "4th year - Semester project, exchange year in South Korea",
    tagline: "A mobile guide for International Students at Seoul National University (SNU) for an easier application process and boosting the exploration rate in their free time.",
    
    note: "Will be published soon!",      
    summary: "‘NAVI’ is an assistance for exchange students accepted to SNU with the intention to create a clearer application process, and further function as an exploration boost by providing tailor-made activities depending on the user's preferences.",

    client: "",
    exhibition: "SNU - 'Design Studio 72' Class Exhibition",
    role: "Individual assignment",
    year: "2025",
    tools: ["Figma, Google Forms,"],

    teaser: "assets/Project-Details/Navi/Navi_TeaserPhoto_Square.png",
    teaserAlt: "Teaser image for the project.",

    // page: "Projects/Navi_Project-teaser.html",
    featured: true                   
  },

  {
    id: "sod",                 // used in data-project="..." on the project page
    title: "SOD - From Resources to Resilience",
    eyebrow: "UNDP Global Policy Centre for Governance (GPCG)",
    context: "3th year - Semester project",
    tagline: "How might systems-oriented design be used to analyze and resolve governance challenges, conflicts, and inequalities in the CETM (Critical Energy Transition Minerals) sectors of producing nations?",
    
    note: "Will be published soon!",      
    summary: "The task was to examine CETM governance, identify leverage points for conflict resolution, and propose sustainable governance models and strategies forward with designmethods from Systems Oriented Design (SOD).",

    client: "UNDP Global Policy Centre for Governance (GPCG)",
    exhibition: "AHO Works 2025, Oslo, Norway",
    role: "Team project, 6 members",
    year: "2025",
    tools: ["Physical designspace, Figma, Miro"],

    teaser: "assets/Project-Details/SOD/SOD_TeaserPhoto_Square.png",
    teaserAlt: "Teaser image for the project.",

    // page: "Projects/SOD_Project-teaser.html",
    featured: true                   
  },

  {
    id: "pots",                 // used in data-project="..." on the project page
    title: "Protection of the Season",
    eyebrow: "Artist's book",
    context: "4th year - Semester project, exchange year in South Korea",
    tagline: "",
    
    note: "Will be published soon!",      
    summary: "By challenging the format of what an “Artist’s Book” could be, I made a collection of hand-crocheted key chain pouches accompanied with their own personalised booklet called ‘Protection of the Season’. The project is inspired by the feeling of homesickness, and takes inspiration of cultural details from my two nationalities, Serbian and Norwegian.",

    client: "",
    exhibition: "Fukuoka Art Book Fair 2026, Fukuoka, Japan",
    role: "Individual assignment",
    year: "2026",
    tools: ["Crocheting, Figma"],

    teaser: "assets/Project-Details/ProtectionOfTheSeason/PotS_TeaserPhoto_TransparentSquare.png",
    teaserAlt: "Teaser image for the project.",

    // page: "Projects/PotS_Project-teaser.html",
    featured: true                   
  },

  {
    id: "timeless",                 // used in data-project="..." on the project page
    title: "Timeless",
    eyebrow: "Human Interaction and Experience Design",
    context: "4th year - Semester project, exchange year in South Korea",
    tagline: "Class taught in Korean. ",
    
    note: "Will be published soon!",      
    summary: "Timeless is a sound-based, interactive installation that reimagines the pre-smartphone era of meeting up. Inspired by 'Where’s Wally', the game features a physical map table and a screen display detailing four characters.",

    client: "", 
    exhibition: "SNU - 'Human Interaction and Design' Class Exhibition",
    role: "Team project, 2 members",
    year: "2025",
    tools: ["MicroBit, Arduino, Modeling, Figma"],

    teaser: "assets/Project-Details/HB&D/Timeless_TeaserPhoto_Square.png",
    teaserAlt: "Teaser image for the project.",

    // page: "Projects/Timeless_Project-teaser.html",
    featured: true                   
  },

];
