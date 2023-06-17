// 새로고침 시 스크롤을 top : 0 위치로 이동
history.scrollRestoration = "auto";
// history.scrollRestoration = "manual";

// scroll시 navbar background color 변경
const header = document.querySelector("#nav");
const headerHeight = header.getBoundingClientRect().height - 10;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("nav--dark");
  } else {
    header.classList.remove("nav--dark");
  }
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
