// scroll시 navbar background color 변경
const header = document.querySelector("#nav");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("nav--dark");
  } else {
    header.classList.remove("nav--dark");
  }
});
