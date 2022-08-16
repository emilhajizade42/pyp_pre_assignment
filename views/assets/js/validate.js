const navInputs = document.querySelectorAll("nav input");
const navButton = document.querySelector("nav button");
const contactInputs = document.querySelectorAll("#contact input");
const contactButton = document.querySelector("#contact button");
const subscribeInputs = document.querySelectorAll("#subscribe input");
const subscribeButton = document.querySelector("#subscribe button");

// Nav inputs validate
navButton.addEventListener("click", function (e) {
  e.preventDefault();
  navInputs.forEach((inp) => {
    validateInputAll(inp);
  });
});
// Contact inputs validate
contactButton.addEventListener("click", function (e) {
  e.preventDefault();
  contactInputs.forEach((inp) => {
    validateInputAll(inp);
  });
});
// Subscribe inputs validate
subscribeButton.addEventListener("click", function (e) {
  e.preventDefault();
  subscribeInputs.forEach((inp) => {
    validateInputAll(inp);
  });
});
// Handle validations
function validateInputAll(element) {
  const value = element.value;
  const inputWarning = element.nextSibling.nextSibling;
  if (value.trim() === "") {
    inputWarning.innerHTML = "This field is required"
    inputWarning.style.display="block";
  }
  else if(element.getAttribute("type")==="num" && !(/^\d+\.?\d*$/).test(value)){
    inputWarning.innerHTML = "Format is not vaild"
    inputWarning.style.display="block";
  }
  else if(element.getAttribute("type")==="email" && !value.includes("@")){
    inputWarning.innerHTML = "Email is not vaild"
    inputWarning.style.display="block";
  }
  else if(element.getAttribute("type")==="datetime" && !(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/).test(value)){
    inputWarning.innerHTML = "Date is not vaild"
    inputWarning.style.display = "block";
  }
  else{
    inputWarning.style.display = "none";
  }
}
