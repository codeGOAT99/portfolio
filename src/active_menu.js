"use strict";

const sectionsIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];
const sections = sectionsIds.map((id) => document.querySelector(id));
const navItems = sectionsIds.map((id) =>
  document.querySelector(`[href= "${id}"]`)
);
const visibleSections = sectionsIds.map(() => false);
let activeNavItem = navItems[0];

const option = {
  rootMargin: "-20px 0px 0px 0px",
  threshold: [0, 0.97],
};
const observer = new IntersectionObserver(observerCallback, option);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionsIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionsIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  console.log("무조건 라스트 섹션", selectLastOne);

  const navIndex = selectLastOne
    ? sectionsIds.length - 1
    : findFirstIntersecting(visibleSections);
  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
