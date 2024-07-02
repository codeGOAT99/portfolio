//Header scroll dark styling
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
