const sections = [
  "google",
  "home",
  "social",
  "games",
  "tv-movies",
  "apps",
  "settings",
];
let currentSection = 1;

/* load section nav btns */
sections.forEach((section, idx) => {
  const sectionBtnDOM = document.getElementById(section + "nav");
  sectionBtnDOM.addEventListener("click", () => openSection(idx));
});

const updateSectionDisplay = () => {
  sections.forEach((section, idx) => {
    const sectionDOM = document.getElementById(section);
    if (typeof sectionDOM === "undefined" || sectionDOM === null)
      return console.warn(`${section} does not have a section.`);
    if (idx === currentSection) {
      sectionDOM.style.display = "flex";
    } else {
      sectionDOM.style.display = "none";
    }

    const sectionBtnDOM = document.getElementById(section + "nav");
    if (idx === currentSection) {
      sectionBtnDOM.classList.add("active");
    } else {
      sectionBtnDOM.classList.remove("active");
    }
  });
};
const openSection = (index) => {
  currentSection = index;
  const currSectionName = sections[index];
  const sectionDOM = document.getElementById(currSectionName);
  if (typeof sectionDOM === "undefined" || sectionDOM === null)
    return console.warn(`${currSectionName} does not have a section.`);
  sectionDOM.style.display = "block";
  updateSectionDisplay();
};

updateSectionDisplay();
