const headerMenuBtn = document.querySelector("#headerMenuBtn");
const nav = document.querySelector("nav");
const navbarClose = document.querySelector(".fa-xmark");
const navBgBlocker = document.querySelector(".navBgBlocker");
headerMenuBtn.addEventListener("click",function (e) {
    nav.style.display="block";
    navBgBlocker.style.display="block";
  })
navbarClose.addEventListener("click",function (e) {
    nav.style.display="none";
    navBgBlocker.style.display="none";
  })