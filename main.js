// 새로고침 시 스크롤을 top : 0 위치로 이동
// history.scrollRestoration = "manual";
history.scrollRestoration = "auto";

// scroll시 navbar background color 변경
const header = document.querySelector("#nav");
const navLogo = document.querySelector(".Nav_logo");
const navMenu = document.querySelector(".Nav_navbar");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("nav--dark");
    navLogo.classList.add("logo--dark");
    navMenu.classList.add("navbar--dark");
  } else {
    header.classList.remove("nav--dark");
    navLogo.classList.remove("logo--dark");
    navMenu.classList.remove("navbar--dark");
  }
});

// nav toggle button 클릭 시 nav menu가 내려옴
const navTogglebtn = document.querySelector(".Nav_toggle-button");
navTogglebtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
// menu 클릭 시 nav menu 올라감
navMenu.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

// logo 클릭 시 페이지 최상단으로 이동
const logo = document.querySelector(".Nav_logo");
logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// scrollIntoview()
//selector만 일치하면 이동할 수 있게 함수를 지정
function scrollIntoViews(selector) {
  //selector의 요소를 찾는다.
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" }); // 'smooth'하게 이동
}

// navbar menu 클릭 시 해당 section으로 이동
const navbar = document.querySelector(".Nav_navbar");
navbar.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(target.dataset);
  if (link == null) {
    return;
  }
  scrollIntoViews(link);
});

// 더 알아보기 button 클릭 시 about me로 이동
const homeNextBtn = document.querySelector(".Home_nextbtn");
homeNextBtn.addEventListener("click", () => {
  scrollIntoViews("#about-me");
});

// page up button
const home = document.querySelector(".Home_container");
const homeHeight = home.getBoundingClientRect().height;
const pageUpBtn = document.querySelector(".PageUpBtn");
// home section의 절반까지 scroll 되어 내려오면
// page up button을 나타나게 함
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    pageUpBtn.classList.add("visible");
  } else {
    pageUpBtn.classList.remove("visible");
  }
});
// button 클릭 시 가장 위로 올라감
pageUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
