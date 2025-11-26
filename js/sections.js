const sections = [
  "search",
  "home",
  "social",
  "games",
  "tv-movies",
  "apps",
  "settings",
];
let currentSection = (localStorage.getItem('currentSection') && parseInt(localStorage.getItem('currentSection')) ) || 1;

let totalCarouselWidth = 0
let currentCarouselX = 0

/* load section nav btns */
sections.forEach((section, idx) => {
  const sectionBtnDOM = document.getElementById(section + "nav");
  sectionBtnDOM.addEventListener("click", () => openSection(idx));

  const sectionDOM = document.getElementById(section)
  if (sectionDOM) totalCarouselWidth += sectionDOM.getBoundingClientRect().width;
});

const updateSectionDisplay = () => {
  const contentCarouselDOM = document.getElementById('contentcarousel')
  let carouselX = 0

  sections.forEach((section, idx) => {
    const sectionDOM = document.getElementById(section);

    if (typeof sectionDOM === "undefined" || sectionDOM === null)
      return console.warn(`${section} does not have a section.`);
    if (idx === currentSection) {
      sectionDOM.classList.add('active')
    } else {
      sectionDOM.classList.remove('active')
    }

    if (idx < currentSection) {
      carouselX -= sectionDOM.getBoundingClientRect().width
    }

    const sectionBtnDOM = document.getElementById(section + "nav");
    if (idx === currentSection) {
      sectionBtnDOM.classList.add("active");
    } else {
      sectionBtnDOM.classList.remove("active");
    }
  });

  contentCarouselDOM.style.transitionDuration = `${400 + Math.abs((carouselX - currentCarouselX)/totalCarouselWidth) * 600}ms`
  contentCarouselDOM.style.transform = `translateX(${carouselX}px)`
  currentCarouselX = carouselX
};
const openSection = (index) => {
  currentSection = index;
  const currSectionName = sections[index];
  const sectionDOM = document.getElementById(currSectionName);
  if (typeof sectionDOM === "undefined" || sectionDOM === null)
    return console.warn(`${currSectionName} does not have a section.`);
  localStorage.setItem('currentSection', currentSection.toString())
  updateSectionDisplay();
};

updateSectionDisplay();
