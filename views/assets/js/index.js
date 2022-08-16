const headerMenuBtn = document.querySelector("#headerMenuBtn");
const nav = document.querySelector("nav");
const navbarClose = document.querySelector(".fa-xmark");
const navBgBlocker = document.querySelector(".navBgBlocker");
const subscribeLink = document.querySelector("#subscribeLink");
const subscribeBtn = document.querySelector("#subscribeBtn");
const subscribeClose = document.querySelector("#subscribeClose");
const subscribeModal = document.querySelector("#subscribe");
const mainSliderImg = document.querySelector(".mainSliderImg>img");
const mainSliderImgTitle = document.querySelector(".mainSliderImg>span");
const imgboxImgsArr = document.querySelectorAll(".imgbox>img");

// Sidebar mobil open
headerMenuBtn.addEventListener("click", function (e) {
  nav.style.display = "block";
  navBgBlocker.style.display = "block";
});
// Sidebar mobil close
navbarClose.addEventListener("click", function (e) {
  nav.style.display = "none";
  navBgBlocker.style.display = "none";
});
// Subcribe modal close
subscribeClose.addEventListener("click", function (e) {
  e.preventDefault();
  navBgBlocker.style.cssText = "display:none;z-index:2;";
  subscribeModal.style.display = "none";
});
// Subcribe modal open
const subscribeLinks = [subscribeLink, subscribeBtn];
subscribeLinks.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    navBgBlocker.style.cssText = "display:block;z-index:4;";
    subscribeModal.style.display = "block";
  });
});
// Slider handler
const roomNames = ["Living Room", "Dining Room", "Bedroom", "Living Room II"];
imgboxImgsArr.forEach((img, index) => {
  img.addEventListener("click", function (e) {
    removeClassAll(imgboxImgsArr, "active");
    e.target.classList.add("active");
    mainSliderImgTitle.innerHTML = roomNames[index];
    mainSliderImg.setAttribute("src", e.target.getAttribute("src"));
  });
});
// Remove all classes from element array
function removeClassAll(elementArr, className) {
  elementArr.forEach((element) => element.classList.remove(className));
}
