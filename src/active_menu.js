"use strict";
/*
1. get every section, menu items
2. observe every section using intersectionObserver
3. activate all section that are currently visible */

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

const option = {};
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
      entry.intersectionRatio >= 0.99;
  });
  console.log("무조건 라스트 섹션", selectLastOne);

  const navIndex = selectLastOne
    ? sectionsIds.length - 1
    : findFirstIntersecting(visibleSections);
  console.log(sectionsIds[navIndex]);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}
