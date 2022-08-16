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
//////////inpCheckIn
const navInputs = document.querySelectorAll("nav input");
const navButton = document.querySelector("nav button");
const contactInputs = document.querySelectorAll("#contact input");
const contactButton = document.querySelector("#contact button");
const subscribeInputs = document.querySelectorAll("#subscribe input");
const subscribeButton = document.querySelector("#subscribe button");
navButton.addEventListener("click",function(e){
  e.preventDefault()
  navInputs.forEach(inp=>{
    validateInputAll(inp)
  })
})
contactButton.addEventListener("click",function(e){
  e.preventDefault()
  contactInputs.forEach(inp=>{
    validateInputAll(inp)
  })
})
subscribeButton.addEventListener("click",function(e){
  e.preventDefault()
  subscribeInputs.forEach(inp=>{
    validateInputAll(inp)
  })
})
// Sidebar mobil open
headerMenuBtn.addEventListener("click",function (e) {
    nav.style.display="block";
    navBgBlocker.style.display="block";
  })
// Sidebar mobil close
navbarClose.addEventListener("click",function (e) {
    nav.style.display="none";
    navBgBlocker.style.display="none";
  })
// Subcribe modal close
subscribeClose.addEventListener("click",function (e) {
  e.preventDefault()
  navBgBlocker.style.cssText ="display:none;z-index:2;"
  subscribeModal.style.display="none";
})
// Subcribe modal open
const subscribeLinks = [subscribeLink,subscribeBtn];
subscribeLinks.forEach(item =>{
  item.addEventListener("click",function (e) {
    e.preventDefault();
    navBgBlocker.style.cssText ="display:block;z-index:4;"
    subscribeModal.style.display="block";
  })
})
// Slider handler
const roomNames = ["Living Room","Dining Room","Bedroom","Living Room II"];
imgboxImgsArr.forEach((img,index)=>{
  img.addEventListener("click",function(e){
    removeClassAll(imgboxImgsArr,"active")
    e.target.classList.add("active")
    mainSliderImgTitle.innerHTML=roomNames[index]
    mainSliderImg.setAttribute("src", e.target.getAttribute("src"))
  })
})
// Remove all classes from element array
function removeClassAll(elementArr,className) { 
  elementArr.forEach(element=>element.classList.remove(className))
 }
 function validateInputAll(element) {
    const value = element.value;
    const inputWarning = element.nextSibling.nextSibling;
    if (value.trim() ==="") {
      inputWarning.innerHTML ="This field is required"
      inputWarning.style.display="block";
    }
    else if(element.getAttribute("type")==="num" && !(/^\d+\.?\d*$/).test(value)){
      inputWarning.innerHTML ="Format is not vaild"
      inputWarning.style.display="block";
    }
    else if(element.getAttribute("type")==="email" && !value.includes("@")){
      inputWarning.innerHTML ="Email is not vaild"
      inputWarning.style.display="block";
    }
    else if(element.getAttribute("type")==="datetime" && !(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/).test(value)){
      inputWarning.innerHTML ="Date is not vaild"
      inputWarning.style.display="block";
    }
    else{
      inputWarning.style.display="none";
    }
 }

//  var zad = (/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/).test("08/08/2013")
//  alert(zad)
